const fs = require('fs');
const path = require('path');

// Nuxt configuration
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "China Bea",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-07-23",
});