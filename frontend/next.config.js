/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'flowbite.com',
      'images.unsplash.com',
      'cdn.vuetifyjs.com',
      'mdbcdn.b-cdn.net',
      'next-rails-playground-development.s3.ap-northeast-1.amazonaws.com',
      'next-rails-playground-production.s3.ap-northeast-1.amazonaws.com',
    ],
  },
  env: {
    // NEXT_PUBLIC_API_MOCKING: "enabled",
  },
}
