/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  env: {
    BEARER_TOKEN: process.env.BEARER_TOKEN,
  }
}

module.exports = nextConfig
