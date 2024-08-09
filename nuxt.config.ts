// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["radix-vue/nuxt"],
  compatibilityDate: "2024-08-02",
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "dark",
      },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/styles/theme.scss", "~/assets/styles/main.scss"],
});
