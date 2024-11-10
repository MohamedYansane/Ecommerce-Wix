import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
//!import Cookies from "js-cookie";now we r not tring to reach cookies in client we dont need this

//now we gonna use next 

import { cookies } from "next/headers";


export const wixClientServer = async () =>{
    let refreshToken;
    try {
      const cookieStore = cookies();
      refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    } catch (error) {}

    const wixClient = createClient({
      modules: {
        products,
        collections, //so that we will be able to fetch our categories
        // currentCart,
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!, //get from settings>params headless de wix and we create it
        tokens: {
          refreshToken,
          accessToken: { value: "", expiresAt: 0 },
        },
      }),
    });
    return wixClient;
}
