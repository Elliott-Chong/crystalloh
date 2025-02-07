import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://crystalloh.framer.website/:path*'
      },
    ]
  }
};

export default nextConfig;
