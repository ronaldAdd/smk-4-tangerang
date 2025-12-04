import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdninstagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fna.fbcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fbcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "otten.static",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
