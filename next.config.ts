import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/roi_calculation_website',
  assetPrefix: '/roi_calculation_website/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
