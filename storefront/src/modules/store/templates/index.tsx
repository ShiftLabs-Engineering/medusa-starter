import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

// Components
import { Carousel } from "components"

import PaginatedProducts from "./paginated-products"
import { getCollectionsList } from "@lib/data/collections"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CollectionsSection: React.FC = async () => {
  const collections = await getCollectionsList(0, 20, [
    "id",
    "title",
    "handle",
    "metadata",
  ])

  if (!collections) {
    return null
  }

  return (
    <Carousel
      heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
      className="mb-26 md:mb-36"
      disableOnDesktop
    >
      {collections.collections.map((collection) => (
        <LocalizedClientLink
          key={collection.id}
          href={`/collections/${collection.handle}`}
        >
          {typeof collection.metadata?.image === "object" &&
            collection.metadata.image &&
            "url" in collection.metadata.image &&
            typeof collection.metadata.image.url === "string" && (
              <Image
                src={collection.metadata.image.url}
                width={992}
                height={1322}
                alt={collection.title}
                className="mb-4 md:mb-6"
              />
            )}
          <h3>{collection.title}</h3>
        </LocalizedClientLink>
      ))}
    </Carousel>
  )
}

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="md:pt-47 py-26 md:pb-36">
      <CollectionsSection />
      <RefinementList sortBy={sortBy} />
      <Suspense fallback={<SkeletonProductGrid />}>
        <PaginatedProducts
          sortBy={sortBy}
          page={pageNumber}
          countryCode={countryCode}
        />
      </Suspense>
    </div>
  )
}

export default StoreTemplate
