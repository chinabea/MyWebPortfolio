// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  ssr: true,
  app: {
    head: {
      title: "China Bea - Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "China Bea's professional portfolio, showcasing his proficiency in numerous frameworks such as Laravel, React, Vue.js, React Native and Node.js.",
        },
        {
          name: "keywords",
          content: "China Bea, portfolio, web developer, projects, freelance",
        },
        { name: "author", content: "China Bea" },
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content: "China Bea",
        },
        {
          property: "og:description",
          content: "China Bea's professional portfolio",
        },
        {
          key: "og:image",
          property: "og:image",
          content: "https://media.licdn.com/dms/image/D5603AQHBhM9P-c_INQ/profile-displayphoto-shrink_200_200/0/1713414372162?e=2147483647&v=beta&t=TQhkNHp0wK_b8xjCT4Tj8pdB0x9natcEs70WSPoc7a4",
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://www.marklouisodavar.cloud/",
        },
        {
          name: "google-site-verification",
          content: "aYUHTnuPb_KNxmhVqo_VuOOgjbzkict4tXX7RsgFenE",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
})
