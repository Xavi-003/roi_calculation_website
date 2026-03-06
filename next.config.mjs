/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/roi_calculation_website',
  assetPrefix: '/roi_calculation_website/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
