"use client"

// External components
import * as React from "react"
import Image from "next/image"

// Components
import {
  Button,
  Input,
  Link,
  Checkbox,
  Layout,
  LayoutColumn,
  Icon,
} from "components"
import {
  UiSelectButton,
  UiSelectIcon,
  UiSelectListBox,
  UiSelectListBoxItem,
  UiSelectValue,
} from "@/components/ui/Select"
import { Popover, RadioGroup, Select } from "react-aria-components"
import { UiRadio, UiRadioBox, UiRadioLabel } from "@/components/ui/Radio"
import { twJoin } from "tailwind-merge"

const Summary: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-8 lg:mb-16">
        <div>
          <p>Order — 1 item</p>
        </div>
        <Button variant="link">Edit cart</Button>
      </div>
      <div className="flex gap-4 lg:gap-6 mb-8">
        <Image
          src="/images/content/sofa4.png"
          width={264}
          height={320}
          alt="Sofa"
          className="max-w-25 lg:max-w-33 w-full"
        />
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-between">
            <div>
              <p className="font-semibold">Paloma Haven</p>
            </div>
            <div>
              <p>€1200</p>
            </div>
          </div>
          <div className="max-lg:text-xs">
            <p className="max-lg:mb-1.5">
              Material: <span className="ml-1">Linen</span>
            </p>
            <p>
              Color: <span className="ml-1">Gray</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-x-8 gap-y-4 mb-8">
        <Input
          variant="outline"
          placeholder="Discount code"
          wrapperClassName="flex-1"
          className="max-lg:h-12"
        />
        <Button className="lg:h-auto grow-0 h-12">Apply</Button>
      </div>
      <div className="flex justify-between mb-2 lg:mb-1 max-lg:text-xs">
        <div>
          <p>Subtotal</p>
        </div>
        <div>
          <p>€1200</p>
        </div>
      </div>
      <div className="flex justify-between mb-6 max-lg:text-xs">
        <div>
          <p>Shipping</p>
        </div>
        <div>
          <p>€50</p>
        </div>
      </div>
      <div className="flex justify-between text-md">
        <div>
          <p>Total</p>
        </div>
        <div>
          <p>€1250</p>
        </div>
      </div>
      <div className="absolute h-full w-auto top-0 right-0 bg-black" />
    </div>
  )
}

export default function CheckoutPage() {
  const [step, setStep] = React.useState(1)
  const [summaryOpen, setSummaryOpen] = React.useState(false)

  return (
    <>
      <Layout className="lg:hidden">
        <LayoutColumn>
          <div className="flex justify-between items-center h-18">
            <Link href="/cutup" className="text-md font-medium">
              SofaSocietyCo.
            </Link>
            <div>
              <p className="font-semibold">Checkout</p>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
      <div className="w-full bg-grayscale-50 lg:hidden">
        <Layout>
          <LayoutColumn>
            <button
              className="h-18 flex justify-between items-center w-full"
              onClick={() => setSummaryOpen(!summaryOpen)}
            >
              <p>Order summary</p>
              <div className="flex items-center gap-4">
                <span>€1250</span>
                <Icon name="chevron-down" className="w-6" />
              </div>
            </button>
            <Summary
              className={twJoin("pt-4 pb-8", !summaryOpen && "hidden")}
            />
          </LayoutColumn>
        </Layout>
      </div>
      <Layout>
        <LayoutColumn className="flex max-lg:flex-col-reverse lg:justify-between">
          <div className="flex-1 pt-7 lg:max-w-125 xl:max-w-150 pb-9 lg:pb-40">
            <Link
              href="/cutup"
              className="text-md font-medium mb-16 inline-block max-lg:hidden"
            >
              SofaSocietyCo.
            </Link>
            <div className="flex justify-between mb-8">
              <div>
                <p
                  className={twJoin(
                    "transition-fontWeight duration-75",
                    step === 1 && "font-semibold"
                  )}
                >
                  1. Email
                </p>
              </div>
              {step !== 1 && (
                <Button variant="link" onClick={() => setStep(1)}>
                  Change
                </Button>
              )}
            </div>
            {step === 1 ? (
              <>
                <Input
                  variant="outline"
                  placeholder="Email"
                  type="email"
                  className="mb-4"
                />
                <Checkbox
                  label="What to get news and offers? Ok, yes and some discounts. But only if you subscribe."
                  className="mb-8"
                />
                <Button onClick={() => setStep(step + 1)}>Next</Button>
              </>
            ) : (
              <ul className="flex gap-16">
                <li className="text-grayscale-500">Email</li>
                <li>jovana.jerimic@gmail.com</li>
              </ul>
            )}
            <div className="flex justify-between mb-8 border-t border-grayscale-200 pt-8 mt-8">
              <div>
                <p
                  className={twJoin(
                    "transition-fontWeight duration-75",
                    step === 2 && "font-semibold"
                  )}
                >
                  2. Delivery details
                </p>
              </div>
              {step !== 2 && step > 2 && (
                <Button variant="link" onClick={() => setStep(2)}>
                  Change
                </Button>
              )}
            </div>
            {step === 2 ? (
              <>
                <Select className="mb-8">
                  <UiSelectButton className="!h-14">
                    <UiSelectValue />
                    <UiSelectIcon />
                  </UiSelectButton>
                  <Popover className="w-[--trigger-width]">
                    <UiSelectListBox>
                      <UiSelectListBoxItem>Croatia</UiSelectListBoxItem>
                      <UiSelectListBoxItem>Afghanistan</UiSelectListBoxItem>
                      <UiSelectListBoxItem>Albania</UiSelectListBoxItem>
                      <UiSelectListBoxItem>Algeria</UiSelectListBoxItem>
                      <UiSelectListBoxItem>Andorra</UiSelectListBoxItem>
                    </UiSelectListBox>
                  </Popover>
                </Select>
                <div className="flex gap-12 mb-8">
                  <Input variant="outline" wrapperClassName="flex-1" />
                  <Input variant="outline" wrapperClassName="flex-1" />
                </div>
                <Input
                  variant="outline"
                  wrapperClassName="flex-1"
                  className="mb-8"
                />
                <Input
                  variant="outline"
                  wrapperClassName="flex-1"
                  className="mb-8"
                />
                <div className="flex gap-12 mb-8">
                  <Input variant="outline" wrapperClassName="flex-1" />
                  <Input variant="outline" wrapperClassName="flex-1" />
                </div>
                <Input
                  variant="outline"
                  wrapperClassName="flex-1"
                  className="mb-8"
                />
                <Button onClick={() => setStep(3)}>Next</Button>
              </>
            ) : (
              step > 2 && (
                <>
                  <ul className="flex gap-15 mb-6">
                    <li className="text-grayscale-500">Name</li>
                    <li>Jovana Jerimic</li>
                  </ul>
                  <ul className="flex gap-13.5 mb-6">
                    <li className="text-grayscale-500">Ship to</li>
                    <li>Duvanjska 3, 10000 Zagreb, Croatia</li>
                  </ul>
                  <ul className="flex gap-14.5">
                    <li className="text-grayscale-500">Phone</li>
                    <li>+385 226 2266</li>
                  </ul>
                </>
              )
            )}
            <div className="flex justify-between mb-8 border-t border-grayscale-200 pt-8 mt-8">
              <div>
                <p
                  className={twJoin(
                    "transition-fontWeight duration-75",
                    step === 3 && "font-semibold"
                  )}
                >
                  3. Shipping
                </p>
              </div>
              {step !== 3 && step > 3 && (
                <Button variant="link" onClick={() => setStep(3)}>
                  Change
                </Button>
              )}
            </div>
            {step === 3 ? (
              <>
                <RadioGroup className="flex flex-col gap-2 mb-8">
                  <UiRadio variant="outline" value="standard" className="gap-4">
                    <UiRadioBox />
                    <UiRadioLabel className="group-data-[selected=true]:font-normal">
                      Standard delivery (3 — 5 days)
                    </UiRadioLabel>
                    <UiRadioLabel className="ml-auto group-data-[selected=true]:font-normal">
                      €50
                    </UiRadioLabel>
                  </UiRadio>
                  <UiRadio variant="outline" value="fast" className="gap-4">
                    <UiRadioBox />
                    <UiRadioLabel className="group-data-[selected=true]:font-normal">
                      Fast delivery (1 — 2 days)
                    </UiRadioLabel>
                    <UiRadioLabel className="ml-auto group-data-[selected=true]:font-normal">
                      €100
                    </UiRadioLabel>
                  </UiRadio>
                </RadioGroup>
                <Button onClick={() => setStep(4)}>Next</Button>
              </>
            ) : (
              step > 3 && (
                <ul className="flex gap-10">
                  <li className="text-grayscale-500">Shipping</li>
                  <li>Standard delivery (3 — 5 days)</li>
                </ul>
              )
            )}
            <div className="flex justify-between mb-8 border-t border-grayscale-200 pt-8 mt-8">
              <div>
                <p
                  className={twJoin(
                    "transition-fontWeight duration-75",
                    step === 4 && "font-semibold"
                  )}
                >
                  4. Payment
                </p>
              </div>
            </div>
            <Button
              isFullWidth
              iconName="arrow-up-right"
              iconPosition="end"
              isVisuallyDisabled={step !== 4}
            >
              Pay with Stripe
            </Button>
          </div>
          <div className="relative lg:max-w-100 xl:max-w-123 flex-1 pt-32 max-lg:hidden z-10">
            <Summary />
          </div>
        </LayoutColumn>
      </Layout>
      <div className="absolute right-0 top-0 w-[45%] bg-grayscale-50 h-full max-lg:hidden" />
    </>
  )
}
