import Add from "@/components/add";
import CustomizeProduct from "@/components/customize-product";
import ProductImages from "@/components/product-images";
import { wixClientServer } from "@/lib/wixclient-server";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import InfoDescription from "@/components/info-description";
const SinglePage = async ({ params }: { params: { slug: string } }) => {
  // console.log(params.slug);
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    //  .limit(limit || PRODUCT_PER_PAGE)
    .find();

  //  console.log(product.items);

  if (!products.items[0]) {
    return notFound();
  }
  //if found we gonna take the first item as product
  const product = products.items[0];

  console.log(product.productOptions);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>

        {product.description && (
          <InfoDescription
            baliseType="p"
            className="text-gray-500"
            description={product.description}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">{product.priceData?.price} FCFA</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.priceData?.price} FCFA
            </h3>
            <h2 className="font-medium text-2xl">
              {product.priceData?.discountedPrice} FCFA
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />

        {/* colors and sizes section */}
        {product.variants && product.productOptions &&
        <CustomizeProduct productId={product._id!} variants={product.variants} productOptions={product.productOptions}/>}
        {/* add to cart */}
        <Add />
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((info: any, i: number) => (
          <div className="text-sm" key={i}>
            {info.title !== "shortDesc" && (
              <>
                <h4 className="font-medium mb-4">{info.title}</h4>
                <InfoDescription
                  baliseType="p"
                  className=""
                  description={info.description}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
