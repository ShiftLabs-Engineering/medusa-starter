"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { updateLineItem } from "@lib/data/cart"
import { NumberField } from "components"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
}

const Item = ({ item }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { handle } = item.variant?.product ?? {}

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  // TODO: Update this to grab the actual max inventory
  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <div className="flex gap-6 border-b border-grayscale-100 py-8 last:pb-0 last:border-b-0">
      <LocalizedClientLink href={`/products/${handle}`}>
        <Thumbnail
          thumbnail={item.variant?.product?.thumbnail}
          images={item.variant?.product?.images}
          size="3/4"
          className="w-25 sm:w-30"
        />
      </LocalizedClientLink>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h2 className="sm:text-md text-base font-normal">
            <LocalizedClientLink href={`/products/${handle}`}>
              {item.product_title}
            </LocalizedClientLink>
          </h2>
          <p className="text-grayscale-500 text-xs sm:text-base">
            {item.variant?.title}
          </p>
        </div>
        <NumberField
          size="sm"
          minValue={1}
          maxValue={maxQuantity}
          value={item.quantity}
          onChange={(value) => changeQuantity(value)}
          isDisabled={updating}
          className="w-25"
        />
      </div>
      <div className="flex flex-col justify-between items-end text-right">
        <LineItemUnitPrice item={item} />
        <DeleteButton id={item.id} data-testid="product-delete-button" />
      </div>
      <ErrorMessage error={error} data-testid="product-error-message" />
    </div>
  )
}

export default Item
