import { HttpTypes } from "@medusajs/types"

export const isProductInStock = (product: HttpTypes.StoreProduct): boolean => {
  return product.variants?.some((variant) => variant.manage_inventory === false || (variant.inventory_quantity && variant.inventory_quantity > 0)) ?? false
}
