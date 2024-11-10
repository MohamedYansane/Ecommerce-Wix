"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products,collections } from "@wix/stores";
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { createContext } from "react";
//as we r in client component we can access the cookie so we gonna install a library js cookie npm i js-cookie npm i --save-dev @types/js-cookie
//if we have not refresh token it gonna return an empty object
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const wixClient = createClient({
  modules: {
    products,
    collections,//so that we will be able to fetch our categories
    // currentCart,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!, //get from settings>params headless de wix and we create it
    tokens: {
      refreshToken,accessToken:{value:"",expiresAt:0}
    },
  }),
});
export type Wixclient = typeof wixClient;

export const WixClientContext = createContext<Wixclient>(wixClient);

//we gonna pass the children that gonna be our entire app
export default function WixClientContextProvider({ children }:{children:ReactNode}) {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
}
