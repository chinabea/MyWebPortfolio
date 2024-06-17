const fs = require('fs');
const path = require('path');

// Define the path to the config file
const configPath = path.resolve(__dirname, 'config.js');

// Check if the config file exists
if (!fs.existsSync(configPath)) {
  throw new Error(`Resource not found!`);
}
 
// Load the config file
const customConfig = require(configPath);

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
  runtimeConfig: {
    public: {
      ...customConfig
    }
  }
});
