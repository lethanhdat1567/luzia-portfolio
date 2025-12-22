import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
                pathname: "/uc**", // dùng direct link kiểu /uc?export=view&id=...
            },
        ],
    },
};

export default nextConfig;
