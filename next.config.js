/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_URL: process.env.GRAPHCMS_URL
  },
  images: {
    domains: [process.env.GRAPHCMS_ASSETS_DOMAIN],
  },
}
