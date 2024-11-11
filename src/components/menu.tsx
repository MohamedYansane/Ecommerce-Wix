"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);
    return ( 
    <div className="">
        <Image src="/menu.png" width={28} height={28} alt="" className="cursor-pointer" onClick={() => setOpen((prev) => !prev)} />
        {open && <div className="absolute bg-gray-900 left-0 top-20 right-0 text-white h-[calc(100dvh-80px)] flex flex-col justify-center items-center gap-8 text-lg z-10">
            <Link href="#">Homepage</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Deals</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Logout</Link>
            <Link href="#">Cart(1)</Link>
            
            </div>}
    </div>
    
);
}
 
export default Menu;