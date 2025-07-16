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
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      failOnError: false
    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'theme-color', content: '#1976d2' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${process.env.NUXT_APP_BASE_URL || '/'}logo.svg`
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