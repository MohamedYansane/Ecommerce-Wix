/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.pexels.com",
                
            },
            {
                protocol:"https",
                hostname: "static.wixstatic.com",
                
            },
            
            //if we have any other we gonnna just duplicate the object
        ]
    }
};

export default nextConfig;
