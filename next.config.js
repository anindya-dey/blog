/** @type {import('next').NextConfig} */

import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_URL: process.env.GRAPHCMS_URL
  }
}
