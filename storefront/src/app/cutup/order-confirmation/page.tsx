// Components
import { Button, Layout, LayoutColumn } from "components"

export default function OrderConfirmationPage() {
  return (
    <Layout className="pt-39 pb-36">
      <LayoutColumn
        start={{ base: 1, lg: 3, xl: 4 }}
        end={{ base: 13, lg: 11, xl: 10 }}
      >
        <h1 className="text-xl md:text-2xl mb-6">Thank you for your order!</h1>
        <p className="mb-4">
          We are pleased to confirm that your order has been successfully placed
          and will be processed shortly.
        </p>
        <p>
          We have sent you the receipt and order details via{" "}
          <strong>e-mail</strong>.<br />
          Your order number is <strong>#100002</strong>.
        </p>
        <div className="flex flex-col sm:flex-row mt-16 gap-8">
          <div className="flex-grow">
            <h2 className="font-normal">Shipping adress:</h2>
            <p className="text-grayscale-500">
              Jovana Jerimic
              <br />
              Duvanjska 3, 10000 Zagreb, Croatia
              <br />
              +385 226 2266
            </p>
          </div>
          <div className="w-42 flex-shrink-0">
            <h2 className="font-normal">Payment:</h2>
            <p className="text-grayscale-500">
              Jovana Jerimic
              <br />
              **** **** **** 1111
              <br />
              Exp: 05/26
            </p>
          </div>
        </div>
        <Button isFullWidth className="mt-16">
          Go back to home page
        </Button>
      </LayoutColumn>
    </Layout>
  )
}
