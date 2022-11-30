// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/style/scss/globalvariables.scss";',
            },
          },
        },
      },
})

// css: [
//     '~assets/style/css/main.css'
//   ]

// // adding modules to use at build time
// buildModules: [
//     '@nuxtjs/style-resources'
// ]
// //telling Nuxt where are our scss and css files are located and 
// //all scss variables and mixins are now globally available to our components, no need to import them
// styleResources: {
//     scss: [
//       '~/assets/style/scss/variables.scss',
//     ]
//   }