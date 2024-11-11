import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./searchbar";
import NavIcons from "./nav-icons";

const Navbar = () => {
    return (
      <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/**Mobile screen */}
        <div className="flex h-full items-center justify-between md:hidden">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">SMYCOM</div>
          </Link>
          <Menu />
        </div>

        {/**BIGGER SCREEN */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/**left si c'ext les bigger screen le left and rright prendront la moitie du parent container*/}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={24} height={24} />
              <div className="text-2xl tracking-wide">SMYCOM</div>
            </Link>
            {/**menu de navigation */}
            <div className="hidden xl:flex gap-4">
              <Link href="#">Homepage</Link>
              <Link href="#">Shop</Link>
              <Link href="#">Deals</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>

          {/**right*/}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
    );
}
 
export default Navbar;