"use client"

// External components
import * as React from "react"
import Image from "next/image"

// Components
import { Button, Input, Link, Checkbox } from "components"
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

export default function Checkout() {
  const [step, setStep] = React.useState(1)

  return (
    <div className="flex justify-between">
      <div className="flex-1 pt-8 max-w-150 mx-auto pb-40">
        <Link href="/cutup" className="text-md font-medium mb-18 inline-block">
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
          <p>
            <span className="text-grayscale-500 mr-16">Emila</span>
            jovana.jerimic@gmail.com
          </p>
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
              <p className="mb-6">
                <span className="text-grayscale-500 mr-15">Name</span>
                Jovana Jerimic
              </p>
              <p className="mb-6">
                <span className="text-grayscale-500 mr-13.5">Ship to</span>
                Duvanjska 3, 10000 Zagreb, Croatia
              </p>
              <p className="mb-6">
                <span className="text-grayscale-500 mr-14.5">Phone</span>
                +385 226 2266
              </p>
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
            <p className="mb-6">
              <span className="text-grayscale-500 mr-10">Shipping</span>
              Standard delivery (3 — 5 days)
            </p>
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
      <div className="lg:max-w-124 xl:max-w-159 flex-1 bg-grayscale-50 pt-31 pl-12 pr-24">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p>Order — 1 item</p>
          </div>
          <Button variant="link">Edit card</Button>
        </div>
        <div className="flex gap-6 mb-8">
          <Image
            src="/images/content/sofa4.png"
            width={264}
            height={320}
            alt="Sofa"
            className="max-w-33 w-full"
          />
          <div className="flex flex-col flex-1 justify-between">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Paloma Haven</p>
              </div>
              <div>
                <p>€1200</p>
              </div>
            </div>
            <div>
              <p>
                Material: <span className="ml-1">Linen</span>
              </p>
              <p>
                Color: <span className="ml-1">Gray</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-8">
          <Input
            placeholder="Discount code"
            wrapperClassName="flex-1"
            className="bg-grayscale-50 border border-grayscale-200"
          />
          <Button className="flex-1 h-auto grow-0">Apply</Button>
        </div>
        <div className="flex justify-between mb-2">
          <div>
            <p>Subtotal</p>
          </div>
          <div>
            <p>€1200</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
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
      </div>
    </div>
  )
}
