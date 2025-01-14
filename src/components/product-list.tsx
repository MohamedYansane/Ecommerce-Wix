import { wixClientServer } from "@/lib/wixclient-server";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify, { sanitize } from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;
const ProductList = async ({categoryId, limit,searchParams}:{categoryId:string, limit?:number, searchParams?:any}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
    // console.log(res.items[0].priceData);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1].image?.url || "product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              {product.priceData?.price} FCFA
            </span>
          </div>
          {/* npm i isomorphic-dompurify  someone might throw something dangerous that's why we gonna use dompurify*/}
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            >
              {/* {product.additionalInfoSections.find(
                (section: any) => section.title === "shortDesc"
              )?.description || ""} */}
            </div>
          )}
          <button className="rounded-2xl ring-1 ring-smy text-smy w-max py-2 px-4 text-xs hover:bg-smy hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
