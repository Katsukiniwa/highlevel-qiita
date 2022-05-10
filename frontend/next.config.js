/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      'flowbite.com',
      'images.unsplash.com',
      'cdn.vuetifyjs.com',
      'mdbcdn.b-cdn.net',
    ],
  },

  env: {
    // NEXT_PUBLIC_API_MOCKING: "enabled",
  },
}
