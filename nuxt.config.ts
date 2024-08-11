import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
    'primeicons/primeicons.css'
  ],
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
],
primevue: {
  options: {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.p-dark',
        cssLayer: false
      }
    }
  },
  components: {
    prefix: '',
    exclude: []
  }
},
tailwindcss: {
  cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
  configPath: 'tailwind.config',
  exposeConfig: {
    level: 2
  },
  config: {},
  viewer: true,
},
app: {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' }
    ]
  }
}
})