/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_URL: process.env.GRAPHCMS_URL
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}
