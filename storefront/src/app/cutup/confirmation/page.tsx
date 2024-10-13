// Components
import { Layout, LayoutColumn, Button } from "@/components/index"

export default function ConfirmationPage() {
  return (
    <div className="py-26 md:pt-39 md:pb-36">
      <Layout>
        <LayoutColumn>
          <div className="max-w-150 mx-auto">
            <h1 className="text-lg md:text-2xl mb-6">
              Thank you for your order!
            </h1>
            <div className="mb-16">
              <p className="mb-4">
                We are pleased to confirm that your order has been successfully
                placed and will be processed shortly.
              </p>
              <p>
                We have sent you the receipt and order details via{" "}
                <span className="font-semibold">e-mail</span>.
              </p>
              <p>
                Your order number is{" "}
                <span className="font-semibold">#100002</span>.
              </p>
            </div>
            <div className="flex gap-y-4 gap-x-10 max-sm:flex-col justify-between mb-16">
              <div className="flex-shrink-0">
                <p className="mb-1">Shipping adress:</p>
                <div className="text-grayscale-500">
                  <p>Jovana Jerimic</p>
                  <p>Duvanjska 3, 10000 Zagreb, Croatia</p>
                  <p>+385 226 2266</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="mb-1">Payment:</p>
                <div className="text-grayscale-500">
                  <p>Jovana Jerimic</p>
                  <p>**** **** **** 1111</p>
                  <p>Exp: 05/26</p>
                </div>
              </div>
            </div>
            <Button isFullWidth className="h-10">
              Go back to home page
            </Button>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
