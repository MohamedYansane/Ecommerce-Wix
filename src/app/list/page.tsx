import Filter from "@/components/filter";
import ProductList from "@/components/product-list";
import { wixClientServer } from "@/lib/wixclient-server";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async({searchParams}:{searchParams:any}) => {
  // console.log(searchParams);
  const wixClient = await wixClientServer();
  //le all-products fait partie de mes collections
  //! searchParams.categorySlug le “categorySlug” je l'ai donne par hasard de tte facon c'est le slug de ma collection que je recupere 
  const response = await wixClient.collections.getCollectionBySlug(
    searchParams.categorySlug || "all-products"
  );
  console.log(response);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-smy text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER*/}
      <Filter />
      {/* PRODUCTS*/}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
      {/* 00000000-000000-000000-000000000001 is my all-products id get it from wix  */}
      <Suspense fallback={"loading"}>
        <ProductList
          categoryId={
            response.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}
 
export default ListPage;