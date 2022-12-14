/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com", "images.unsplash.com", "www.google.com"],
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = nextConfig;
