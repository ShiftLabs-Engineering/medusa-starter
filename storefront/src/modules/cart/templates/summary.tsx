"use client"

import { HttpTypes } from "@medusajs/types"

import CartTotals from "@modules/cart/components/cart-totals"
import { Button } from "@/components/Button"
import { LocalizedLink } from "@/components/LocalizedLink"

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
      <LocalizedLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <Button isFullWidth className="mt-10">
          Proceed to checkout
        </Button>
      </LocalizedLink>
    </>
  )
}

export default Summary
