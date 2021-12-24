import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  typescript: {
    strict: true,
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
});
