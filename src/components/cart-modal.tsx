"use client"

import Image from "next/image";

const CartModal = () => {

    const cartItems = true;
    return (
      <div className="bg-white w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 right-0 flex flex-col gap-6 z-20">
        {!cartItems ? (
          <div className="">cart is emplty</div>
        ) : (
          <>
           <h2 className="text-xl">Shopping Cart</h2>
            {/* LIST */}
            <div className="flex flex-col gap-8">
              {/**ITEM*/}
              <div className="flex gap-4">
                <Image
                  src="/assets/product_01.jpg"
                  alt=""
                  width={72}
                  height={96}
                  className="abject-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="top-section">
                    {/**title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm ">$49</div>
                    </div>
                    {/**description*/}
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="bottom-section flex  justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
              {/**ITEM*/}
              <div className="flex gap-4">
                <Image
                  src="/assets/product_02.jpg"
                  alt=""
                  width={72}
                  height={96}
                  className="abject-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="top-section">
                    {/**title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm ">$49</div>
                    </div>
                    {/**description*/}
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="bottom-section flex  justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button className="rounded-md py-3 px-4 bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
}
 
export default CartModal;