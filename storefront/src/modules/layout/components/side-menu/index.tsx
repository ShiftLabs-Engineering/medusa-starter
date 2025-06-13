"use client"

import { EllipsisHorizontal, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import { useState } from "react"

import { useToggleState } from "@/lib/hooks/use-toggle-state"
import CountrySelect from "@/modules/checkout/components/country-select"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const { state, open, close } = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <button
          className="flex items-center h-full pr-2 cursor-pointer group"
          onClick={open}
          data-testid="nav-menu-button"
        >
          <EllipsisHorizontal className="group-hover:rotate-90 ease-in-out duration-150" />
        </button>
      </div>
      {state && (
        <>
          <div
            className="fixed inset-0 bg-rgba(3, 7, 18, 0.75) z-50"
            onClick={close}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-full flex">
            <div className="w-full bg-white border-r border-gray-200 flex flex-col max-w-xs">
              <div className="flex items-center justify-between px-4 py-6">
                <LocalizedClientLink
                  href="/"
                  className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                  onClick={close}
                >
                  Hairven Beauty
                </LocalizedClientLink>
                <button
                  className="flex items-center justify-center w-8 h-8"
                  onClick={close}
                >
                  <XMark />
                </button>
              </div>

              <div className="flex flex-col gap-y-6 px-4 pb-6">
                <div className="flex flex-col gap-y-3">
                  <LocalizedClientLink
                    href="/store"
                    className="text-large-regular"
                    onClick={close}
                    data-testid="nav-store-link"
                  >
                    Store
                  </LocalizedClientLink>
                  <LocalizedClientLink
                    href="/search"
                    className="text-large-regular"
                    onClick={close}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                  <LocalizedClientLink
                    href="/account"
                    className="text-large-regular"
                    onClick={close}
                    data-testid="nav-account-link"
                  >
                    Account
                  </LocalizedClientLink>
                  <LocalizedClientLink
                    href="/cart"
                    className="text-large-regular"
                    onClick={close}
                    data-testid="nav-cart-link"
                  >
                    Cart
                  </LocalizedClientLink>
                </div>
                {regions && (
                  <CountrySelect
                    regions={regions}
                    toggleState={close}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SideMenu
