const { loadEnv, defineConfig } = require('@medusajs/framework/utils')

loadEnv(process.env.NODE_ENV, process.cwd())

module.exports = defineConfig({
  admin: {
    backendUrl:
      process.env.BACKEND_URL ?? 'https://sofa-society-starter.medusajs.app',
    storefrontUrl: process.env.STOREFRONT_URL,
  },
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
  modules: [
    {
      resolve: '@medusajs/medusa/fulfillment',
      options: {
        providers: [
          {
            resolve: `@medusajs/medusa/fulfillment-manual`,
            id: 'manual',
            options: {
              // provider options...
            },
          },
        ],
      },
    },
    {
      resolve: '@medusajs/medusa/inventory',
    },
    {
      resolve: '@medusajs/medusa/stock-location',
    },
    {
      resolve: '@medusajs/medusa/tax',
      options: {
        providers: [
          {
            resolve: './src/modules/hairven-tax',
            id: 'sars-vat',
            options: {
              // Feature toggles - set to false to disable, true to enable
              enableProductSpecificTax: false, // Enable/disable product-specific tax logic
              enableBeautyDiscounts: false, // Enable/disable beauty product discounts/markups
              enableVATExemptions: false, // Enable/disable VAT exemptions for essential items
              enableShippingTaxModifications: false, // Enable/disable shipping tax modifications

              // Configuration values (only used if respective features are enabled)
              hairCareDiscountRate: 0.1, // 10% discount for hair care products
              cosmeticsMarkupRate: 0.1, // 10% markup for cosmetics
              freeShippingThreshold: 100000, // $1000 in cents - free shipping tax threshold
            },
          },
        ],
      },
    },
    {
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
          {
            id: 'eft',
            resolve: './src/modules/eft',
            options: {
              bankDetails: {
                accountName: 'Hairven Enterprise (Pty) Ltd',
                accountNumber: '1234567890',
                bankName: 'FNB',
                branchCode: '123456',
              },
            },
          },
        ],
      },
    },
    {
      resolve: './src/modules/fashion',
    },
    {
      resolve: '@medusajs/medusa/file',
      options: {
        providers: [
          {
            resolve: '@medusajs/medusa/file-s3',
            id: 's3',
            options: {
              file_url: process.env.S3_FILE_URL,
              access_key_id: process.env.S3_ACCESS_KEY_ID,
              secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
              region: process.env.S3_REGION,
              bucket: process.env.S3_BUCKET,
              endpoint: process.env.S3_ENDPOINT,
              additional_client_config: {
                forcePathStyle:
                  process.env.S3_FORCE_PATH_STYLE === 'true' ? true : undefined,
              },
            },
          },
        ],
      },
    },
    {
      resolve: '@medusajs/medusa/notification',
      options: {
        providers: [
          {
            resolve: './src/modules/resend',
            id: 'resend',
            options: {
              channels: ['email'],
              api_key: process.env.RESEND_API_KEY,
              from: process.env.RESEND_FROM,
              siteTitle: 'HairvenBeauty.',
              companyName: 'Hairven beauty',
              footerLinks: [
                {
                  url: 'https://hairvenbeauty.com',
                  label: 'Hairven Beauty',
                },
                {
                  url: 'https://www.instagram.com/hairvenbeauty/',
                  label: 'Instagram',
                },
              ],
            },
          },
        ],
      },
    },

    {
      resolve: './src/modules/meilisearch',
      options: {
        config: {
          host:
            process.env.MEILISEARCH_HOST ??
            'https://fashion-starter-search.agilo.agency',
          apiKey: process.env.MEILISEARCH_API_KEY,
        },
        settings: {
          products: {
            indexSettings: {
              searchableAttributes: [
                'title',
                'subtitle',
                'description',
                'collection',
                'categories',
                'type',
                'tags',
                'variants',
                'sku',
              ],
              displayedAttributes: [
                'id',
                'title',
                'handle',
                'subtitle',
                'description',
                'is_giftcard',
                'status',
                'thumbnail',
                'collection',
                'collection_handle',
                'categories',
                'categories_handle',
                'type',
                'tags',
                'variants',
                'sku',
              ],
            },
            primaryKey: 'id',
            /**
             * @param {import('@medusajs/types').ProductDTO} product
             */
            transformer: (product) => {
              return {
                id: product.id,
                title: product.title,
                handle: product.handle,
                subtitle: product.subtitle,
                description: product.description,
                is_giftcard: product.is_giftcard,
                status: product.status,
                thumbnail: product.images?.[0]?.url ?? null,
                collection: product.collection.title,
                collection_handle: product.collection.handle,
                categories:
                  product.categories?.map((category) => category.name) ?? [],
                categories_handle:
                  product.categories?.map((category) => category.handle) ?? [],
                type: product.type?.value,
                tags: product.tags.map((tag) => tag.value),
                variants: product.variants.map((variant) => variant.title),
                sku: product.variants
                  .filter(
                    (variant) => typeof variant.sku === 'string' && variant.sku
                  )
                  .map((variant) => variant.sku),
              }
            },
          },
        },
      },
    },
  ],
})
