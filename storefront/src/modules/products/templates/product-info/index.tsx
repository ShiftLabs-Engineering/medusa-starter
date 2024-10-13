import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <>
      {product.collection && (
        <LocalizedClientLink
          href={`/collections/${product.collection.handle}`}
          className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
        >
          <p className="text-grayscale-500 mb-2">{product.collection.title}</p>
        </LocalizedClientLink>
      )}
      <h2 className="text-md md:text-xl mb-2">{product.title}</h2>
    </>
  )
}

export default ProductInfo
