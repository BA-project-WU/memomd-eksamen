import { Base } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // this is global, it will be seen in all pages
  app: {
    head: {
      title: 'MemoMD App',
      meta: [
        { name: 'description', content: 'MemoMD App - For at effektivisere medicinstuderendes læring til medicin'}
      ],
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.google.com/icons?icon.set=Material+Icons'}
      // ],
    }
  },
  css: [
    '@/assets/style/main.css',
  ],
  modules: ['@kevinmarrec/nuxt-pwa'],
  pwa: {
    workbox: {
      enabled: true,
    },
    meta: {
      name: 'MemoMD',
    },
    manifest: {
      name: 'MemoMD App especiel lavede til medicinstuderende',
      short_name: 'MemoMD App',
      lang: 'da',
      display: 'standalone',
      id: '/?source=pwa',
      start_url: '/?source=pwa',
      background_color: '#3367D6',
      scope: '/',
      theme_color: '#3367D6',
      description:
        'MemoMD App - For at effektivisere medicinstuderendes læring til medicin',
    },
  },
});
