"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        if(name){
            router.push(`/list?name=${name}`);
        }

    }
    return ( 
    <form className="flex itwms-center gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
       <input type="text" name="name" placeholder="search" className="flex-1 bg-transparent outline-none"/>
       <button className="cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt=""/>
       </button>
    </form> );
}
 
export default SearchBar;