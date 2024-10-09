// External components
import Image from "next/image"

// Components
import {
  Button,
  Icon,
  Layout,
  LayoutColumn,
  Link,
  NumberField,
} from "components"

export default function CartPage() {
  return (
    <Layout className="pt-39 pb-36">
      <LayoutColumn
        start={1}
        end={{ base: 13, lg: 9, xl: 10 }}
        className="mb-14 lg:mb-0"
      >
        <div className="lg:h-22 pb-12 lg:pb-0 border-b border-b-grayscale-100">
          <h1 className="md:text-2xl text-lg leading-none">
            Your shopping cart
          </h1>
        </div>
        <div>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </LayoutColumn>
      <LayoutColumn start={{ base: 1, lg: 9, xl: 10 }} end={13}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-grayscale-500">Subtotal:</p>
            <p>€225</p>
          </div>
          <div className="flex justify-between">
            <p className="text-grayscale-500">Shipping:</p>
            <p>Free</p>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-between text-md font-semibold">
          <p>Total:</p>
          <p>€225</p>
        </div>
        <Button isFullWidth className="mt-10">
          Proceed to checkout
        </Button>
      </LayoutColumn>
    </Layout>
  )
}

const ProductItem = () => (
  <div className="flex gap-6 border-b border-grayscale-100 py-8 last:pb-0 last:border-b-0">
    <Link href="/">
      <Image
        src="/images/content/product1.png"
        alt=""
        width={256}
        height={341}
        className="w-25 sm:w-30"
      />
    </Link>
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <h2 className="sm:text-md text-base font-normal">
          <Link href="/">Paloma Haven</Link>
        </h2>
        <p className="text-grayscale-500 text-xs sm:text-base">
          Linen / Light Gray
        </p>
      </div>
      <NumberField size="sm" defaultValue={1} minValue={1} className="w-25" />
    </div>
    <div className="flex flex-col justify-between items-end text-right">
      <div>
        {/* <p className="text-base sm:text-sm font-semibold text-red-primary">€1500</p> */}
        <p className="text-base sm:text-sm font-semibold">€1500</p>
        {/* <p className="text-grayscale-500 line-through">€3000</p> */}
      </div>
      <button>
        <Icon name="trash" className="w-6 h-6" />
      </button>
    </div>
  </div>
)
