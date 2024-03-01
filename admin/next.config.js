const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.vuetifyjs.com',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        // pathname: '',
      },
    ],
  },
}

module.exports = withVanillaExtract(nextConfig)
