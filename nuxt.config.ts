// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // this is global, it will be seen in all pages
  app: {
    head: {
      title: "MemoMD",
      meta: [
        {
          name: "description",
          content:
            "MemoMD App - For at effektivisere medicinstuderendes læring til medicin",
        },
      ],
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.google.com/icons?icon.set=Material+Icons'}
      // ],
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-core",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/brands-svg-core",
    ],
  },
  css: [
    "~/assets/style/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: [
    // pwa
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/apollo",
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://graphql.umbraco.io',
        httpLinkOptions: {
          headers:{
            "umb-project-alias": process.env.UMBRACO__PROJECTALIAS,
            "api-key": process.env.UMBRACO__APIKEY,
          }
        }
      }
    },
  },
  pwa: {
    workbox: {
      enabled: true,
    },
    meta: {
      name: "MemoMD",
    },
    manifest: {
      name: "MemoMD platform til medicinstuderende",
      short_name: "MemoMD",
      lang: "da",
      display: "standalone",
      id: "/?source=pwa",
      start_url: "/?source=pwa",
      background_color: "#8dd9de",
      scope: "/",
      theme_color: "#8dd9de",
      description:
        "MemoMD - Læringsplatform til medicinstuderende for at effektivisere læring",
    },
  },
  
  runtimeConfig: {
    public: {
      umbracoApiKey: process.env.UMBRACO__APIKEY,
      umbracoProjectAlias: process.env.UMBRACO__PROJECTALIAS,
    },
  },
  routeRules: {
    '/flashcards/**': {ssr:false}
  }
});
