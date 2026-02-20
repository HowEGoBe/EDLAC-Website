/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
