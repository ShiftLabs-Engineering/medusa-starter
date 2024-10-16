import { HttpTypes } from "@medusajs/types"

import { getProductsById } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { LocalizedLink } from "@/components/LocalizedLink"
import Thumbnail from "../thumbnail"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedLink href={`/products/${product.handle}`}>
      <Thumbnail
        thumbnail={product.thumbnail}
        images={product.images}
        size="full"
        className="mb-4 md:mb-6"
      />
      <div className="flex justify-between max-md:flex-col">
        <div className="max-md:text-xs">
          <p className="mb-1">{product.title}</p>
          {product.collection && (
            <p className="text-grayscale-500 text-xs max-md:hidden">
              {product.collection.title}
            </p>
          )}
        </div>
        <div>
          {/** TODO: show discounted price */}
          <p className="font-semibold max-md:text-xs">
            {cheapestPrice?.calculated_price}
          </p>
        </div>
      </div>
    </LocalizedLink>
  )
}
