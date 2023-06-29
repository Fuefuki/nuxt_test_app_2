const { API_KEY, SERVICE_DOMAIN } = process.env;
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
  },
})
