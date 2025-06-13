"use client"

import { ShoppingBag } from "@medusajs/icons"
import { Suspense } from "react"

import { getCart } from "@/lib/data/cart"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const CartButton = () => {
  return (
    <Suspense
      fallback={
        <LocalizedClientLink
          className="hover:text-ui-fg-base flex gap-2"
          href="/cart"
          data-testid="nav-cart-link"
        >
          <ShoppingBag />
          Cart (0)
        </LocalizedClientLink>
      }
    >
      <CartButtonInner />
    </Suspense>
  )
}

const CartButtonInner = async () => {
  const cart = await getCart()

  return (
    <LocalizedClientLink
      className="hover:text-ui-fg-base flex gap-2"
      href="/cart"
      data-testid="nav-cart-link"
    >
      <ShoppingBag />
      Cart ({cart?.items?.length || 0})
    </LocalizedClientLink>
  )
}

export default CartButton
