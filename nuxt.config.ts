const fs = require('fs');
const path = require('path');

// Nuxt configuration
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "China Bea - Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
});
