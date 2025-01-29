import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: '/test',
        destination: 'https://start-saas.com'
      },
      {
        source: '/:path*',
        destination: 'https://thankful-volunteers-703936.framer.app/:path*'
      },
    ]
  }
};

export default nextConfig;
