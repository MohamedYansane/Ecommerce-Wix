"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./cart-modal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  //Temporary
  const isLoggedIn = true;

  const handleProfile = () => {
    console.log("you clicked me");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    console.log(`prev value: ${isProfileOpen}`);
    setIsProfileOpen((prev) => !prev);
  };
  useEffect(() => {
    
    console.log(`La valeur is profil open: ${isProfileOpen}`);
  }, [isProfileOpen]);
  return (
    <div className="relative flex items-center gap-4 xl:gap-6 ">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt=""
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="bg-white absolute flex flex-col  p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profil</Link>

          <Link href="" className="mt-2">
            Logout
          </Link>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt=""
        className="cursor-pointer"
      />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt=""
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6  bg-smy rounded-full  text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOpen && (
        <div>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
