import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/simulacra',
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};

export default nextConfig;
