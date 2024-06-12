// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons', 'f7'],
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  colorMode: {
    preference: 'light',
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }, 
  routeRules: {
    '/login': {ssr: false},
    '/customers/:id': {ssr: false}, 
    'service/orders/:id': {ssr: false}
  }
})
