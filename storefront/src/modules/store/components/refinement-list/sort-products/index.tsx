"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { Select } from "components"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions | undefined
  setQueryParams: (name: string, value: SortOptions) => void
}

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <Select
      name="Sort by"
      options={{
        sortBy: "Sort by",
        created_at: "Latest Arrivals",
        price_asc: "Lowest price",
        price_desc: "Highest price",
      }}
      value={sortBy || "sortBy"}
      contentProps={{ align: "end" }}
      onValueChange={handleChange}
    />
  )
}

export default SortProducts
