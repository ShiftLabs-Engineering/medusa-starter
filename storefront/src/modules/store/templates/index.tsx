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

const StoreTemplate = async ({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection?: string[]
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const collections = await getCollectionsList(0, 20, [
    "id",
    "title",
    "handle",
    "metadata",
  ])

  return (
    <div className="md:pt-47 py-26 md:pb-36">
      {collections && (
        <Carousel
          heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
          className="mb-26 md:mb-36"
          disableOnDesktop
        >
          {collections.collections.map((c) => (
            <LocalizedClientLink key={c.id} href={`/collections/${c.handle}`}>
              {typeof c.metadata?.image === "object" &&
                c.metadata.image &&
                "url" in c.metadata.image &&
                typeof c.metadata.image.url === "string" && (
                  <Image
                    src={c.metadata.image.url}
                    width={992}
                    height={1322}
                    alt={c.title}
                    className="mb-4 md:mb-6"
                  />
                )}
              <h3>{c.title}</h3>
            </LocalizedClientLink>
          ))}
        </Carousel>
      )}
      <RefinementList
        collections={Object.fromEntries(
          collections.collections.map((c) => [c.handle, c.title])
        )}
        collection={collection}
        sortBy={sortBy}
      />
      <Suspense fallback={<SkeletonProductGrid />}>
        <PaginatedProducts
          sortBy={sortBy}
          page={pageNumber}
          countryCode={countryCode}
          collectionId={
            !collection
              ? undefined
              : collections.collections
                  .filter((c) => collection.includes(c.handle))
                  .map((c) => c.id)
          }
        />
      </Suspense>
    </div>
  )
}

export default StoreTemplate
