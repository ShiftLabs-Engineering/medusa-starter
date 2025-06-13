import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import medusaError from "@lib/util/medusa-error"

// Cache for sales channels to avoid repeated API calls
let salesChannelsCache: HttpTypes.StoreSalesChannel[] | null = null

export const listSalesChannels = async function () {
  if (salesChannelsCache) {
    return salesChannelsCache
  }

  try {
    const response = await sdk.client
      .fetch<{ sales_channels: HttpTypes.StoreSalesChannel[] }>(`/store/sales-channels`, {
        method: "GET",
        next: { tags: ["sales-channels"] },
        cache: "force-cache",
        headers: {
          "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!
        }
      })

    salesChannelsCache = response.sales_channels
    return response.sales_channels
  } catch (error) {
    console.error('❌ Error fetching sales channels:', error)

    // Check if it's a publishable key error
    if (error?.message?.includes('Publishable API key required')) {
      console.error('🔑 Publishable API key is missing or invalid!')
      console.error('Check your NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY environment variable')
    }

    return []
  }
}

export const getDefaultSalesChannel = async function () {
  try {
    const salesChannels = await listSalesChannels()

    if (!salesChannels || salesChannels.length === 0) {
      console.warn('No sales channels found. Make sure your Medusa backend has sales channels configured.')
      return null
    }

    // Look for "Online" sales channel first, then fall back to the first one
    const onlineChannel = salesChannels.find(channel =>
      channel.name?.toLowerCase().includes('online')
    )

    if (onlineChannel) {
      return onlineChannel
    }

    // Return the first sales channel as default
    return salesChannels[0]
  } catch (error) {
    console.error('Error getting default sales channel:', error)
    return null
  }
}

export const getSalesChannelById = async function (id: string) {
  try {
    const salesChannels = await listSalesChannels()
    return salesChannels.find(channel => channel.id === id) || null
  } catch (error) {
    console.error('Error getting sales channel by ID:', error)
    return null
  }
}
