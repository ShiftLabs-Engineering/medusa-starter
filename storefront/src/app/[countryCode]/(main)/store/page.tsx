import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    collection?: string | string[]
    category?: string | string[]
    type?: string | string[]
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page, collection, category, type } = searchParams

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      collection={
        !collection
          ? undefined
          : Array.isArray(collection)
          ? collection
          : [collection]
      }
      category={
        !category ? undefined : Array.isArray(category) ? category : [category]
      }
      type={!type ? undefined : Array.isArray(type) ? type : [type]}
    />
  )
}
