/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT
  },
  images: {
    domains: [process.env.HYGRAPH_ASSETS_DOMAIN],
  },
}

module.exports = nextConfig
