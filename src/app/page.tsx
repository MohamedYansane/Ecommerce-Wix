
import CategoryList from "@/components/category-list";
import ProductList from "@/components/product-list"
import Slider from "@/components/slider"
import useWixClient from "@/hooks/use-wixclient";
import { wixClientServer } from "@/lib/wixclient-server";
import {Suspense, useEffect } from "react";


const HomePage = async() => {

   //** we were doing this for client side and we must add use client at the top and remove the async for the homepage */
  // let use our hook 
  // const wixClient = useWixClient();
  // useEffect(()=>{

  //   const getProducts = async () => {
  //     const response = await wixClient.products.queryProducts().find();
  //     console.log(response);
  //   }
  //   getProducts();
  // },[wixClient])
  // const wixClient = await wixClientServer();
  // const response = await  wixClient.products.queryProducts().find();
  // console.log(response);
  return (
    <div className="">
      <Slider />
      {/**Product List */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Features Product</h1>
        <Suspense fallback="Loading....">
          <ProductList
            categoryId={`${process.env.FEATURED_PRODUCTS_CATEGORY_ID}`}
            limit={4}
          />
        </Suspense>
      </div>
      {/**Category List */}
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback="Loading....">
          <CategoryList />
        </Suspense>
        
      </div>
      {/**New Product */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
}

export default HomePage