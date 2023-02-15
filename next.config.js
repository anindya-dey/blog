/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_URL: process.env.GRAPHCMS_URL
  },
  images: {
    domains: [process.env.GRAPHCMS_ASSETS_DOMAIN],
  },
}

module.exports = nextConfig
