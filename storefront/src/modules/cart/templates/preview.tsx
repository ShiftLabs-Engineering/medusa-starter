"use client"

import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"

import Item from "@modules/cart/components/item"

type ItemsTemplateProps = {
  items?: HttpTypes.StoreCartLineItem[]
}

const ItemsPreviewTemplate = ({ items }: ItemsTemplateProps) => {
  const hasOverflow = items && items.length > 4

  return (
    <div
      className={clx({
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
    >
      {items
        ? items
            .sort((a, b) => {
              return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
            })
            .map((item) => {
              return <Item key={item.id} item={item} />
            })
        : null}
    </div>
  )
}

export default ItemsPreviewTemplate
