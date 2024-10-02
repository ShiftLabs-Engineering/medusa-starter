const { loadEnv, defineConfig, Modules } = require('@medusajs/framework/utils');

loadEnv(process.env.NODE_ENV, process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || 'supersecret',
      cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
    },
  },
  modules: {
    [Modules.PAYMENT]: {
      resolve: '@medusajs/medusa/payment',
      options: {
        providers: [
          {
            id: 'stripe',
            resolve: '@medusajs/medusa/payment-stripe',
            options: {
              apiKey: process.env.STRIPE_API_KEY,
              webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
            },
          },
        ],
      },
    },
  },
});
