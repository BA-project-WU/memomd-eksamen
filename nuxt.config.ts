import { Base } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({
    target: 'static',
    router: {
      baseURL:'https://ba-project-wu.github.io/contact/memomd/',
    },
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/style/scss/globalvariables.scss";',
            },
          },
        },
      },
      modules: [
        '@kevinmarrec/nuxt-pwa'
      ],
      pwa: {
        workbox: {
          enabled: true
        },
        meta: {
          name: "MemoMD",
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
          description: 'MemoMD App - For at effektivisere medicinstuderendes læring til medicin',
      }    
    }
})

