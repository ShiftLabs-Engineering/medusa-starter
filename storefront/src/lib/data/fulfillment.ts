import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"

export const listCartShippingMethods = async function (cartId: string) {
  try {
    if (!cartId) {
      console.error('No cart ID provided to listCartShippingMethods')
      return []
    }

    const response = await sdk.client
      .fetch<HttpTypes.StoreShippingOptionListResponse>(
        `/store/shipping-options`,
        {
          query: {
            cart_id: cartId,
            fields: "+service_zone.fulfllment_set.type,*service_zone.fulfillment_set.location.address",
          },
          method: "GET",
          cache: 'no-store' // Force dynamic fetch since shipping options can change
        }
      )

    if (!response.shipping_options) {
      console.warn('No shipping options found for cart:', cartId)
      return []
    }

    return response.shipping_options
  } catch (error) {
    console.error('Error fetching shipping options:', error)
    return [] // Return empty array instead of null to avoid undefined errors
  }
}

export const calculatePriceForShippingOption = async (
  optionId: string,
  cartId: string,
  data?: Record<string, unknown>
) => {
  try {
    if (!optionId || !cartId) {
      console.error('Missing required parameters for calculatePriceForShippingOption')
      return null
    }

    const body: Record<string, unknown> = { cart_id: cartId }
    if (data) {
      body.data = data
    }

    const response = await sdk.client
      .fetch<{ shipping_option: HttpTypes.StoreCartShippingOption }>(
        `/store/shipping-options/${optionId}/calculate`,
        {
          method: "POST",
          body,
          cache: 'no-store' // Force dynamic fetch since prices can change
        }
      )

    return response.shipping_option

  } catch (error) {
    console.error('Error calculating shipping price:', error)
    return null
  }
}