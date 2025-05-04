import {
  createApiKeysWorkflow,
  createCollectionsWorkflow,
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createProductTypesWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createShippingOptionsWorkflow,
  createShippingProfilesWorkflow,
  createStockLocationsWorkflow,
  createTaxRegionsWorkflow,
  linkSalesChannelsToApiKeyWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresWorkflow,
  uploadFilesWorkflow,
} from '@medusajs/medusa/core-flows'
import {
  ExecArgs,
  IFulfillmentModuleService,
  ISalesChannelModuleService,
  IStoreModuleService,
} from '@medusajs/framework/types'
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from '@medusajs/framework/utils'

import * as fs from 'fs/promises'
import * as path from 'path'
import { getImageFileContent, getImageUrlContent } from './seed-helpers'

export default async function seedDemoData({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const remoteLink = container.resolve(ContainerRegistrationKeys.LINK)
  const fulfillmentModuleService: IFulfillmentModuleService = container.resolve(
    Modules.FULFILLMENT
  )
  const salesChannelModuleService: ISalesChannelModuleService =
    container.resolve(Modules.SALES_CHANNEL)
  const storeModuleService: IStoreModuleService = container.resolve(
    Modules.STORE
  )
  // const hairPropsModuleService: HairPropsModuleService = container.resolve(
  //   'hairPropsModuleService'
  // )

  const countries = ['za', 'bw', 'zm', 'mz', 'na', 'ke', 'ug', 'rw']

  logger.info('Seeding store data...')
  const [store] = await storeModuleService.listStores()
  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: 'Default Sales Channel',
  })

  if (!defaultSalesChannel.length) {
    // create the default sales channel
    const { result: salesChannelResult } = await createSalesChannelsWorkflow(
      container
    ).run({
      input: {
        salesChannelsData: [
          {
            name: 'Online',
          },
          {
            name: 'In store',
          },
        ],
      },
    })
    defaultSalesChannel = salesChannelResult
  }

  logger.info('Seeding region data...')
  let region
  try {
    const { result: regionResult } = await createRegionsWorkflow(container).run(
      {
        input: {
          regions: [
            {
              name: 'South Africa',
              currency_code: 'zar',
              countries,
              payment_providers: ['pp_stripe_stripe'], // ['pp_paystack_paystack'],
            },
          ],
        },
      }
    )
    region = regionResult[0]
    logger.info('Finished seeding regions.')
  } catch (error) {
    if (error.message.includes('already assigned to a region')) {
      logger.info('Region already exists, skipping...')
      // Get the existing region from the store
      if (store.default_region_id) {
        region = { id: store.default_region_id }
      }
    } else {
      throw error
    }
  }

  if (region) {
    await updateStoresWorkflow(container).run({
      input: {
        selector: { id: store.id },
        update: {
          supported_currencies: [
            {
              currency_code: 'zar',
              is_default: true,
            },
            {
              currency_code: 'usd',
            },
          ],
          default_sales_channel_id: defaultSalesChannel[0].id,
          default_region_id: region.id,
        },
      },
    })
  }

  logger.info('Seeding tax regions...')
  try {
    await createTaxRegionsWorkflow(container).run({
      input: countries.map((country_code) => ({
        country_code,
      })),
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Some tax regions already exist, skipping...')
    } else {
      throw error
    }
  }
  logger.info('Finished seeding tax regions.')

  logger.info('Seeding stock location data...')
  const { result: stockLocationResult } = await createStockLocationsWorkflow(
    container
  ).run({
    input: {
      locations: [
        {
          name: 'Johannesburg',
          address: {
            city: 'Johannesburg',
            country_code: 'ZA',
            address_1: '',
          },
        },
      ],
    },
  })
  const stockLocation = stockLocationResult[0]

  await remoteLink.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: 'manual_manual',
    },
  })

  logger.info('Seeding fulfillment data...')
  let shippingProfile
  try {
    const { result: shippingProfileResult } =
      await createShippingProfilesWorkflow(container).run({
        input: {
          data: [
            {
              name: 'Postnet',
              type: 'default',
            },
          ],
        },
      })
    shippingProfile = shippingProfileResult[0]
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Shipping profile already exists, skipping...')
      // Get the existing shipping profile from the fulfillment service
      const [existingProfile] =
        await fulfillmentModuleService.listShippingProfiles({
          name: 'Postnet',
        })
      if (existingProfile) {
        shippingProfile = existingProfile
      }
    } else {
      throw error
    }
  }

  let fulfillmentSet
  try {
    fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
      name: 'Africa Warehouse delivery',
      type: 'shipping',
      service_zones: [
        {
          name: 'South Africa',
          geo_zones: [
            {
              country_code: 'ZA',
              type: 'country',
            },
            {
              country_code: 'BW',
              type: 'country',
            },
            {
              country_code: 'ZM',
              type: 'country',
            },
            {
              country_code: 'MZ',
              type: 'country',
            },
            {
              country_code: 'NA',
              type: 'country',
            },
            {
              country_code: 'KE',
              type: 'country',
            },
            {
              country_code: 'UG',
              type: 'country',
            },
            {
              country_code: 'RW',
              type: 'country',
            },
          ],
        },
      ],
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Fulfillment set already exists, skipping...')
      // Get the existing fulfillment set
      const [existingSet] = await fulfillmentModuleService.listFulfillmentSets({
        name: 'European Warehouse delivery',
      })
      console.log('existingSet', existingSet)
      if (existingSet) {
        fulfillmentSet = existingSet
      }
    } else {
      throw error
    }
  }

  let pickupFulfillmentSet
  try {
    pickupFulfillmentSet = await fulfillmentModuleService.createFulfillmentSets(
      {
        name: 'Store pickup',
        type: 'pickup',
        service_zones: [
          {
            name: 'Store pickup (JHB)',
            geo_zones: [
              {
                country_code: 'ZA',
                type: 'country',
              },
            ],
          },
        ],
      }
    )
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Pickup fulfillment set already exists, skipping...')
      // Get the existing pickup fulfillment set
      const [existingSet] = await fulfillmentModuleService.listFulfillmentSets({
        name: 'Store pickup',
      })
      if (existingSet) {
        pickupFulfillmentSet = existingSet
      }
    } else {
      throw error
    }
  }

  try {
    await createShippingOptionsWorkflow(container).run({
      input: [
        {
          name: 'Standard Shipping',
          price_type: 'flat',
          provider_id: 'manual_manual',
          service_zone_id: fulfillmentSet?.service_zones?.[0]?.id,
          shipping_profile_id: shippingProfile.id,
          type: {
            label: 'Standard (Postnet)',
            description: 'Ship in 2 working days.',
            code: 'standard',
          },
          prices: [
            {
              currency_code: 'ZAR',
              amount: 120,
            },
            {
              region_id: region.id,
              amount: 120,
            },
          ],
          rules: [
            {
              attribute: 'enabled_in_store',
              value: '"true"',
              operator: 'eq',
            },
            {
              attribute: 'is_return',
              value: 'false',
              operator: 'eq',
            },
          ],
        },
      ],
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Shipping option already exists, skipping...')
    } else if (
      error.message.includes('service_zone_id and provider_id are required')
    ) {
      logger.info(
        'Skipping shipping option creation - no valid service zone found'
      )
    } else {
      throw error
    }
  }

  try {
    await createShippingOptionsWorkflow(container).run({
      input: [
        {
          name: 'JHB Store Pickup',
          price_type: 'flat',
          provider_id: 'manual_manual',
          service_zone_id: pickupFulfillmentSet?.service_zones?.[0]?.id,
          shipping_profile_id: shippingProfile.id,
          type: {
            label: 'JHB Store Pickup',
            description: 'Free in-store pickup.',
            code: 'standard',
          },
          prices: [
            {
              currency_code: 'zar',
              amount: 0,
            },
            {
              region_id: region.id,
              amount: 0,
            },
          ],
          rules: [
            {
              attribute: 'enabled_in_store',
              value: '"true"',
              operator: 'eq',
            },
            {
              attribute: 'is_return',
              value: 'false',
              operator: 'eq',
            },
          ],
        },
      ],
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Store pickup shipping option already exists, skipping...')
    } else if (
      error.message.includes('service_zone_id and provider_id are required')
    ) {
      logger.info(
        'Skipping store pickup shipping option creation - no valid service zone found'
      )
    } else {
      throw error
    }
  }

  logger.info('Finished seeding fulfillment data.')

  try {
    await linkSalesChannelsToStockLocationWorkflow(container).run({
      input: {
        id: stockLocation.id,
        add: [defaultSalesChannel[0].id],
      },
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info(
        'Sales channel to stock location link already exists, skipping...'
      )
    } else {
      throw error
    }
  }
  logger.info('Finished seeding stock location data.')

  logger.info('Seeding publishable API key data...')
  let publishableApiKey
  try {
    const { result: publishableApiKeyResult } = await createApiKeysWorkflow(
      container
    ).run({
      input: {
        api_keys: [
          {
            title: 'Webshop',
            type: 'publishable',
            created_by: '',
          },
        ],
      },
    })
    publishableApiKey = publishableApiKeyResult[0]
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('API key already exists, skipping...')
      // Skip the API key creation and linking
      logger.info('Finished seeding publishable API key data.')
      return
    } else {
      throw error
    }
  }

  try {
    await linkSalesChannelsToApiKeyWorkflow(container).run({
      input: {
        id: publishableApiKey.id,
        add: [defaultSalesChannel[0].id],
      },
    })
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Sales channel to API key link already exists, skipping...')
    } else {
      throw error
    }
  }
  logger.info('Finished seeding publishable API key data.')

  logger.info('Seeding product data...')

  let categoryResult
  try {
    const { result } = await createProductCategoriesWorkflow(container).run({
      input: {
        product_categories: [
          {
            name: 'Straight Hair',
            is_active: true,
          },
          {
            name: 'Curly Hair',
            is_active: true,
          },
          {
            name: 'Wavy Hair',
            is_active: true,
          },
          {
            name: 'Accessories',
            is_active: true,
          },
          {
            name: 'Hair Care',
            is_active: true,
          },
          {
            name: 'Bone Straight',
            is_active: true,
          },
        ],
      },
    })
    categoryResult = result
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Product categories already exist, skipping...')
      // Get existing categories
      const productModuleService = container.resolve(Modules.PRODUCT)
      categoryResult = await productModuleService.listProductCategories()
    } else {
      throw error
    }
  }

  const [
    boneStraight1Image,
    straightHair1Image,
    curlyHair1Image,
    wavyHair1Image,
    hairCare1Image,
    hairAccessories1Image,
  ] = await uploadFilesWorkflow(container)
    .run({
      input: {
        files: [
          {
            access: 'public',
            filename: 'bone-straight-1.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'product-types/bone-straight/bone-straight-1.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'straight-hair-1.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'product-types/straight/straight-hair-1.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'curly-hair-1.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'product-types/curly/curly-hair-1.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'wavy-hair-1.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'product-types/wavy/wavy-hair-1.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'hair-care-1.png',
            mimeType: 'image/png',
            content: await getImageFileContent(
              'product-types/care/hair-care-1.png'
            ),
          },
          {
            access: 'public',
            filename: 'hair-accessories-1.png',
            mimeType: 'image/png',
            content: await getImageFileContent(
              'product-types/accessories/hair-accessories-1.png'
            ),
          },
        ],
      },
    })
    .then((res) => res.result)

  let productTypes
  try {
    const { result } = await createProductTypesWorkflow(container).run({
      input: {
        product_types: [
          {
            value: 'Bone Straight',
            metadata: {
              image: boneStraight1Image,
            },
          },
          {
            value: 'Straight Hair',
            metadata: {
              image: straightHair1Image,
            },
          },
          {
            value: 'Curly Hair',
            metadata: {
              image: curlyHair1Image,
            },
          },
          {
            value: 'Wavy Hair',
            metadata: {
              image: wavyHair1Image,
            },
          },
          {
            value: 'Hair Care Accessories',
            metadata: {
              image: hairAccessories1Image,
            },
          },
        ],
      },
    })
    productTypes = result
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Product types already exist, skipping...')
      // Get existing product types
      const productModuleService = container.resolve(Modules.PRODUCT)
      productTypes = await productModuleService.listProductTypes()
    } else {
      throw error
    }
  }

  const [
    rawDonorImage,
    rawDonorCollectionPageImage,
    rawDonorProductPageImage,
    rawDonorProductPageWideImage,
    rawDonorProductPageCtaImage,
    pureDonorImage,
    pureDonorCollectionPageImage,
    pureDonorProductPageImage,
    pureDonorProductPageWideImage,
    pureDonorProductPageCtaImage,
    babyDonorImage,
    babyDonorCollectionPageImage,
    babyDonorProductPageImage,
    babyDonorProductPageWideImage,
    babyDonorProductPageCtaImage,
    theAugmentImage,
  ] = await uploadFilesWorkflow(container)
    .run({
      input: {
        files: [
          {
            access: 'public',
            filename: 'raw-donor.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/raw-donor/image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'raw-donor-collection-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/raw-donor/collection_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'raw-donor-product-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/raw-donor/product_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'raw-donor-product-page-wide-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/raw-donor/product_page_wide_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'raw-donor-product-page-cta-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/raw-donor/product_page_cta_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'pure-donor.png',
            mimeType: 'image/png',
            content: await getImageFileContent(
              'collections/pure-donor/image.png'
            ),
          },
          {
            access: 'public',
            filename: 'pure-donor-collection-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/pure-donor/collection_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'pure-donor-product-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/pure-donor/product_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'pure-donor-product-page-wide-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/pure-donor/product_page_wide_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'pure-donor-product-page-cta-image.png',
            mimeType: 'image/png',
            content: await getImageFileContent(
              'collections/pure-donor/product_page_cta_image.png'
            ),
          },
          {
            access: 'public',
            filename: 'baby-donor.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/baby-donor/image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'baby-donor-collection-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/baby-donor/collection_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'baby-donor-product-page-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/baby-donor/product_page_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'baby-donor-product-page-wide-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/baby-donor/product_page_wide_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'baby-donor-product-page-cta-image.jpg',
            mimeType: 'image/jpeg',
            content: await getImageFileContent(
              'collections/baby-donor/product_page_cta_image.jpg'
            ),
          },
          {
            access: 'public',
            filename: 'the-augment.png',
            mimeType: 'image/png',
            content: await getImageFileContent(
              'collections/the-augment/image.png'
            ),
          },
        ],
      },
    })
    .then((res) => res.result)

  let collections
  try {
    const { result } = await createCollectionsWorkflow(container).run({
      input: {
        collections: [
          {
            title: 'Raw Premium Donor',
            handle: 'raw-donor',
            metadata: {
              description:
                'Sleek and stylish, carefully sourced raw hair from one or two donors, ensuring a unique and personalized look.',
              image: rawDonorImage,
              collection_page_image: rawDonorCollectionPageImage,
              collection_page_heading:
                'Raw Donor: Effortless elegance, timeless comfort,beautiful look',
              collection_page_content: `Sleek and stylish, carefully sourced raw hair from one or two donors, ensuring a unique and personalized look. Bouncy when full
              and best for long lengths.low maintenance for less volume setup whilst more attention and maintenance required for voluminous pieces.

              This collection is bleahcable and maintains it's quality afterwards provided good toner/bleaching products are used.`,
              product_page_heading: 'Collection Inspired Interior',
              product_page_image: rawDonorProductPageImage,
              product_page_wide_image: rawDonorProductPageWideImage,
              product_page_cta_image: rawDonorProductPageCtaImage,
              product_page_cta_heading:
                "The 'Name of sofa' embodies a unique blend of elegance and beauty and uniqueness.",
              product_page_cta_link: 'See more out of Raw Donor collection',
            },
          },
          {
            title: 'Pure Premium Donor',
            handle: 'pure-donor',
            metadata: {
              description:
                'Pure premium donor : reasonably priced fine hair, carefully and meticulously sourced from 2 to 4 donors',
              image: pureDonorImage,
              collection_page_image: pureDonorCollectionPageImage,
              collection_page_heading:
                'Pure Donor: Voluminous and silky, for that breath-taking experience',
              collection_page_content: `Our pure premium donor hair are voluminous and bouncy.
              They are the silkiest of all collections, and are perfect for those who want to add volume and texture to their hair.

              while requiring more care and attention for longer lengths, they are the best for shorter lengths like bobs.
              They are bleachable and maintain their quality afterwards , provided good wuality products are used`,
              product_page_heading: 'Collection inspired Picks',
              product_page_image: pureDonorProductPageImage,
              product_page_wide_image: pureDonorProductPageWideImage,
              product_page_cta_image: pureDonorProductPageCtaImage,
              product_page_cta_heading:
                "The 'Name of sofa' shows rich texture, softness and volume.",
              product_page_cta_link: 'See more out of Pure Donor collection',
            },
          },
          {
            title: 'Baby Donor',
            handle: 'baby-donor',
            metadata: {
              description:
                'Sophisticated and silky,thinnest hair strands that are meticulously sourced from the fine quality young adult hair',
              image: babyDonorImage,
              collection_page_image: babyDonorCollectionPageImage,
              collection_page_heading:
                'Baby Donor: thin and relaxed long strands, eclectic style with a touch of free-spirited charm',
              collection_page_content: `Sophisticated and silky,thinnest hair strands that are meticulously sourced from the fine quality young adult hair. Low maintenance with little know-jhow required.

              Our baby donor collection can be bleached to the lightest shade of blonde/white while maintaining the natural texture and volume.They are mainly perfect for longer lengths`,
              product_page_heading: 'Collection Inspired Picks',
              product_page_image: babyDonorProductPageImage,
              product_page_wide_image: babyDonorProductPageWideImage,
              product_page_cta_image: babyDonorProductPageCtaImage,
              product_page_cta_heading:
                "The 'Name of sofa' embodies chic style ,free-spirited charm and beauty.",
              product_page_cta_link: 'See more out of Baby Donor collection',
            },
          },
          {
            title: 'The Augment',
            handle: 'the-augment',
            metadata: {
              description:
                'The best products to help keep your hair extensions looking their best.',
              image: theAugmentImage,
              collection_page_image: theAugmentImage,
              collection_page_heading:
                'The Augment: Enhancing beauty in continuum',
              collection_page_content: `The best collection of hair care accessories and products, carefully picked to augment your hair care routine,
              ensuring your hair extensions look their best, and maintaining their quality and longevity.

              With our range of product selections, you can rest assured that your hair extensions will be in top condition, looking their best, and lasting longer.`,
              product_page_heading: 'Collection Inspired Picks',
              product_page_image: theAugmentImage,
              product_page_wide_image: theAugmentImage,
              product_page_cta_image: theAugmentImage,
              product_page_cta_heading:
                "The 'Name of sofa' is a stash of the best hair care accessories and products.",
              product_page_cta_link: 'See more out of The Augment collection',
            },
          },
        ],
      },
    })
    collections = result
  } catch (error) {
    if (error.message.includes('already exists')) {
      logger.info('Collections already exist, skipping...')
      // Get existing collections
      const productModuleService = container.resolve(Modules.PRODUCT)
      collections = await productModuleService.listProductCollections()
    } else {
      throw error
    }
  }

  // First create all product lengths
  // const productLengths: ProductLengthModelType[] =
  //   await hairPropsModuleService.createProductLengths([
  //     { name: '8"' },
  //     { name: '10"' },
  //     { name: '12"' },
  //     { name: '14"' },
  //     { name: '16"' },
  //     { name: '18"' },
  //     { name: '20"' },
  //     { name: '22"' },
  //     { name: '24"' },
  //     { name: '26"' },
  //     { name: '28"' },
  //     { name: '30"' },
  //   ])

  // // Then create all cap sizes with their relationships to product lengths
  // await hairPropsModuleService.createCapSizes([
  //   {
  //     name: 'XS',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  //   {
  //     name: 'S',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  //   {
  //     name: 'M',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  //   {
  //     name: 'L',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  //   {
  //     name: 'XL',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  //   {
  //     name: 'XXL',
  //     productLengths: productLengths.map((pl) => pl.id),
  //   },
  // ])

  // const customHighlightImages = await uploadFilesWorkflow(container)
  //   .run({
  //     input: {
  //       files: [
  //         {
  //           access: 'public',
  //           filename: 'custom-highlight-1.jpg',
  //           mimeType: 'image/jpg',
  //           content: await getImageFileContent(
  //             './media/products/Custom-highlight/HarvenBeauty12253.jpg'
  //           ),
  //         },
  //         {
  //           access: 'public',
  //           filename: 'custom-highlight-2.jpg',
  //           mimeType: 'image/jpg',
  //           content: await getImageFileContent(
  //             './media/products/Custom-highlight/HarvenBeauty12276.jpg'
  //           ),
  //         },
  //         {
  //           access: 'public',
  //           filename: 'custom-highlight-3.jpg',
  //           mimeType: 'image/jpg',
  //           content: await getImageFileContent(
  //             './media/products/Custom-highlight/HarvenBeauty12292.jpg'
  //           ),
  //         },
  //         {
  //           access: 'public',
  //           filename: 'custom-highlight-4.jpg',
  //           mimeType: 'image/jpg',
  //           content: await getImageFileContent(
  //             './media/products/Custom-highlight/HarvenBeauty12296.jpg'
  //           ),
  //         },
  //         {
  //           access: 'public',
  //           filename: 'custom-highlight-5.jpg',
  //           mimeType: 'image/jpg',
  //           content: await getImageFileContent(
  //             './media/products/Custom-highlight/HarvenBeauty12300.jpg'
  //       ],
  //     },
  //   })
  //   .then((res) => res.result)

  // await createProductsWorkflow(container).run({
  //   input: {
  //     products: [
  //       {
  //         title: 'Custom Highlight',
  //         handle: 'custom-highlight',
  //         description:
  //           'The Custom Highlight combines flowing curves and cozy, textured fabric for a truly bohemian vibe. Its relaxed design adds character and comfort, perfect for eclectic living spaces with a free-spirited charm.',
  //         category_ids: [
  //           categoryResult.find((cat) => cat.name === '').id,
  //         ],
  //         collection_id: collections.find((c) => c.handle === 'boho-chic').id,
  //         type_id: productTypes.find((pt) => pt.value === 'Sofas').id,
  //         status: ProductStatus.PUBLISHED,
  //         images: customHighlightImages,
  //         options: [
  //           {
  //             title: 'Material',
  //             values: ['Microfiber', 'Velvet'],
  //           },
  //           {
  //             title: 'Color',
  //             values: ['Dark Gray', 'Purple'],
  //           },
  //         ],
  //         variants: [
  //           {
  //             title: 'Microfiber / Dark Gray',
  //             sku: 'ASTRID-CURVE-MICROFIBER-DARK-GRAY',
  //             options: {
  //               Material: 'Microfiber',
  //               Color: 'Dark Gray',
  //             },
  //             manage_inventory: false,
  //             prices: [
  //               {
  //                 amount: 1500,
  //                 currency_code: 'eur',
  //               },
  //               {
  //                 amount: 1700,
  //                 currency_code: 'usd',
  //               },
  //             ],
  //           },
  //           {
  //             title: 'Velvet / Purple',
  //             sku: 'ASTRID-CURVE-VELVET-PURPLE',
  //             options: {
  //               Material: 'Velvet',
  //               Color: 'Purple',
  //             },
  //             manage_inventory: false,
  //             prices: [
  //               {
  //                 amount: 2000,
  //                 currency_code: 'eur',
  //               },
  //               {
  //                 amount: 2200,
  //                 currency_code: 'usd',
  //               },
  //             ],
  //           },
  //         ],
  //         sales_channels: [
  //           {
  //             id: defaultSalesChannel[0].id,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // })
}
