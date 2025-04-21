import { defineWidgetConfig } from '@medusajs/admin-sdk'
import { Container, Heading, Text } from '@medusajs/ui'
import {
  DetailWidgetProps,
  OrderDTO,
  OrderLineItemDTO,
} from '@medusajs/framework/types'
import { Photo } from '@medusajs/icons'

type ThumbnailProps = {
  src?: string | null
  alt?: string
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <div className="bg-ui-bg-component flex h-8 w-6 items-center justify-center overflow-hidden rounded-[4px]">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <Photo className="text-ui-fg-subtle" />
      )}
    </div>
  )
}

const Item = ({ item }: { item: OrderLineItemDTO }) => {
  return (
    <div
      key={item.id}
      className="text-ui-fg-subtle grid grid-cols-2 items-start gap-x-4 px-6 py-4"
    >
      <div className="flex items-start gap-x-4">
        <Thumbnail src={item.thumbnail} />
        <div>
          <Text
            size="small"
            leading="compact"
            weight="plus"
            className="text-ui-fg-base"
          >
            {item.title}
          </Text>
          {/* <Text size="small">
						{item.variant?.options.map((o: any) => o.value).join(" · ")}
					</Text> */}
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-x-4">
        <div className="flex items-center justify-end gap-x-4">
          <Text size="small">Wig Cap Size</Text>
        </div>
        <div className="flex items-center justify-end font-semibold">
          <Text size="small">
            {item.metadata?.capSize?.toString() || 'N/A'}
          </Text>
        </div>
      </div>
    </div>
  )
}

const ItemBreakdown = ({ order }: { order: OrderDTO }) => {
  // const { reservations, isError, error } = useAdminReservations({
  //   line_item_id: order.items.map((i) => i.id),
  // })

  // if (isError) {
  //   throw error
  // }

  return (
    <div>
      {order?.items?.map((item) => {
        // const reservation = reservations
        //   ? reservations.find((r) => r.line_item_id === item.id)
        //   : null

        return <Item key={item.id} item={item} />
      })}
    </div>
  )
}

const Header = ({ order }: { order: OrderDTO }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <Heading level="h2">
        Wig Cap Sizes (Where applicable) for {order.display_id}
      </Heading>
    </div>
  )
}

const OrderCapSizeWidget = ({ data: order }: DetailWidgetProps<OrderDTO>) => {
  return (
    <Container className="divide-y divide-dashed p-0">
      <Header order={order} />
      <ItemBreakdown order={order} />
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: 'order.details.after',
})

export default OrderCapSizeWidget
