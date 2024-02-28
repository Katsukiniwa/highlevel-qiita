/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vuetifyjs.com",
        port: "",
        // pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
