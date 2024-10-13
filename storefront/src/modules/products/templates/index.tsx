import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import { Layout, LayoutColumn } from "@/components/Layout"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  materials: {
    id: string
    name: string
    colors: {
      id: string
      name: string
      hex_code: string
    }[]
  }[]
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  materials,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  const images = product.images || []
  const hasImages = Boolean(
    product.images &&
      product.images.filter((image) => Boolean(image.url)).length > 0
  )

  return (
    <div
      className="pt-18 md:pt-26 lg:pt-37 pb-23 md:pb-36"
      data-testid="product-container"
    >
      <ImageGallery className="md:hidden" images={images} />
      <Layout>
        <LayoutColumn className="mb-26 md:mb-36">
          <div className="flex max-lg:flex-col gap-8 xl:gap-27">
            {hasImages && (
              <div className="lg:w-1/2 flex flex-1 flex-col gap-8">
                <ImageGallery className="max-md:hidden" images={images} />
              </div>
            )}
            <div className="sticky flex-1 top-0">
              <ProductInfo product={product} />
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    materials={materials}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper
                  id={product.id}
                  materials={materials}
                  region={region}
                />
              </Suspense>
            </div>
            {!hasImages && <div className="flex-1" />}
          </div>
        </LayoutColumn>
      </Layout>
      <Layout>
        <LayoutColumn>
          <h2 className="text-lg md:text-2xl mb-8 md:mb-6">
            Collection Inspired Interior
          </h2>
          <Image
            src="/images/content/living-room2.png"
            width={2496}
            height={1404}
            alt="Living room"
            className="mb-8 md:mb-20 max-md:aspect-[3/2] max-md:object-cover"
          />
        </LayoutColumn>
      </Layout>
      <Image
        src="/images/content/living-room3.png"
        width={2496}
        height={1404}
        alt="Living room"
        className="mb-8 md:mb-20 max-md:aspect-[3/2] max-md:object-cover"
      />
      <Layout>
        <LayoutColumn start={1} end={{ base: 10, md: 6 }}>
          <Image
            src="/images/content/sofa3.png"
            width={492}
            height={656}
            alt="Sofa"
          />
        </LayoutColumn>
        <LayoutColumn start={{ base: 1, md: 7 }} end={13}>
          <h3 className="text-md md:text-2xl my-8 md:mt-20">
            The Paloma Haven sofa is a masterpiece of minimalism and luxury.
          </h3>
          <p className="text-base md:text-md">
            <LocalizedClientLink href="/collections" variant="underline">
              See more out of &apos;Modern Luxe&apos; collection
            </LocalizedClientLink>
          </p>
        </LayoutColumn>
      </Layout>
      <Suspense fallback={<SkeletonRelatedProducts />}>
        <RelatedProducts product={product} countryCode={countryCode} />
      </Suspense>
    </div>
  )
}

export default ProductTemplate
