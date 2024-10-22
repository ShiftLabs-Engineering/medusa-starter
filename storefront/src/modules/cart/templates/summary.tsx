"use client"

import { HttpTypes } from "@medusajs/types"

import CartTotals from "@modules/cart/components/cart-totals"
import { LocalizedButtonLink } from "@/components/LocalizedLink"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart.email) {
    return "email"
  }

  if (!cart?.shipping_address?.address_1) {
    return "address"
  }

  if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  }

  return "payment"
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <>
      <CartTotals cart={cart} />
      <LocalizedButtonLink
        href={"/checkout?step=" + step}
        isFullWidth
        className="mt-10"
      >
        Proceed to checkout
      </LocalizedButtonLink>
    </>
  )
}

export default Summary
