// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-icon"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
