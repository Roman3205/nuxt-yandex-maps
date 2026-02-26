export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vue-yandex-maps/nuxt'],
  yandexMaps: {
    apikey: 'your_api_key',
    servicesApikeys: {
      // router: ''
    }
  },
  runtimeConfig: {
    public: {
      yandexMaps: {
        apikey: ''
      }
    }
  },
  ssr: true
})
