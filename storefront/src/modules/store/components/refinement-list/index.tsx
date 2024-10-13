"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import { Button, Layout, LayoutColumn, Select } from "components"

type RefinementListProps = {
  sortBy: SortOptions | undefined
  search?: boolean
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <Layout className="mb-4 md:mb-6">
      <LayoutColumn>
        <h2 className="text-lg md:text-2xl mb-6">Shop</h2>
        <div className="flex justify-between gap-10">
          <Button
            iconName="plus"
            iconPosition="end"
            className="bg-white md:hidden border px-4 hover:bg-white border-grayscale-200 h-auto flex-1 grow-0 text-black"
          >
            Filter
          </Button>
          <div className="flex justify-between gap-6 max-md:hidden">
            <Button variant="ghost" className="px-2">
              Price
            </Button>
            <Button variant="ghost" className="px-2">
              Color
            </Button>
            <Button variant="ghost" className="px-2">
              Materials
            </Button>
            <Button variant="ghost" className="px-2">
              Collection
            </Button>
            <Button variant="ghost" className="px-2">
              Seats
            </Button>
          </div>
          <SortProducts
            sortBy={sortBy}
            setQueryParams={setQueryParams}
            data-testid={dataTestId}
          />
        </div>
      </LayoutColumn>
    </Layout>
  )
}

export default RefinementList
