/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com', 'www.google.com'],
    unoptimized : true,
  },
  basePath: "/",
  assetPrefix: "/"
  }

module.exports = nextConfig
