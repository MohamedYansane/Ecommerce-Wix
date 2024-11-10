"use client"

import { WixClientContext } from "@/context/wix-context";
import { useContext } from "react";

const useWixClient = () => {
    // let use our hook useContext cause we created the wix client there
  return  useContext(WixClientContext);
   
}
 
export default useWixClient;