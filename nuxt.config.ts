// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@vueuse/nuxt', 'nuxt-charts'],
  css: [
    '~/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],
  ssr: false,
  app: {
    baseURL: '/ecom-fashion',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
        }
      ]
    }
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: './vuetify.config.ts'
  }
})