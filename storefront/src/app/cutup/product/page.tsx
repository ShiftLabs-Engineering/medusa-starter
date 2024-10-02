"use client"

// External components\
import * as React from "react"
import Image from "next/image"
import { z } from "zod"

// Components
import {
  Button,
  ColorPicker,
  Layout,
  LayoutColumn,
  Link,
  NumberField,
  ProductPageGallery,
  SizePickerGroup,
} from "components"
import { Form } from "components/Form/Form"

export default function ProductPage() {
  const colors = [
    {
      name: "Lumea",
      colors: [
        { name: "1", hex: "#A2A2A2" },
        { name: "2", hex: "#353535" },
        { name: "3", hex: "#E8E8E8" },
      ],
    },
    {
      name: "Belano",
      colors: [
        { name: "1", hex: "#AF1A1C" },
        { name: "2", hex: "#AC7E4D" },
        { name: "3", hex: "#353535" },
      ],
    },
    {
      name: "Viaro",
      colors: [
        { name: "1", hex: "#EEB12D" },
        { name: "2", hex: "#BB6930" },
        { name: "3", hex: "#7C3E07" },
      ],
    },
    {
      name: "Tessaro",
      colors: [
        { name: "1", hex: "#7D4E82" },
        { name: "2", hex: "#A57746" },
        { name: "3", hex: "#353535" },
      ],
    },
    {
      name: "Modello",
      colors: [
        { name: "1", hex: "#80AF83" },
        { name: "2", hex: "#353535" },
        { name: "3", hex: "#243C26" },
      ],
    },
  ]
  const sizes = ["One Seater", "Two Seater", "Three Seater"]

  const productPageSchema = z.object({
    color: z.object({
      name: z.string(),
      colors: z.object({
        name: z.string(),
        hex: z.string(),
      }),
    }),
    size: z.string(),
    quantity: z.number(),
  })

  return (
    <Layout className="pt-37 pb-36">
      <LayoutColumn className="mb-26">
        <div className="flex gap-27">
          <div className="w-1/2 flex flex-1 flex-col gap-8">
            <ProductPageGallery>
              <Image
                src="/images/content/product1.png"
                width={1200}
                height={1600}
                alt="Sofa"
              />
              <Image
                src="/images/content/product2.png"
                width={1200}
                height={1600}
                alt="Sofa"
              />
            </ProductPageGallery>
          </div>
          <div className="sticky flex-1 top-0">
            <Form schema={productPageSchema}>
              <p className="text-gray mb-4">Modern Luxe</p>
              <h1 className="text-xl mb-4">Paloma Haven</h1>
              <p className="text-md mb-8">€12000</p>
              <div className="mb-12 max-w-120">
                <p>
                  Minimalistic designs, neutral colors, and high-quality
                  textures. Perfect for those who seek comfort with a clean and
                  understated aesthetic. This collection brings the essence of
                  Scandinavian elegance to your living room.
                </p>
              </div>
              <ColorPicker materials={colors} name="color" className="mb-12" />
              <SizePickerGroup
                data={sizes}
                defaultValue={sizes[0]}
                name="size"
                className="mb-12"
              />
              <div className="flex gap-4 mb-6">
                <NumberField
                  name="quantity"
                  fieldProps={{
                    defaultValue: 1,
                    minValue: 1,
                    maxValue: 5,
                    "aria-label": "Quantity",
                  }}
                />
                <Button className="flex-1">Add to cart</Button>
              </div>
              <p className="text-gray">Estimate delivery 2-3 days</p>
            </Form>
          </div>
        </div>
      </LayoutColumn>
      <LayoutColumn className="mb-8">
        <h2 className="text-2xl mb-8">Collection Inspired Interior</h2>
        <Image
          src="/images/content/living-room2.png"
          width={2496}
          height={1404}
          alt="Living room"
          className="mb-8"
        />
        <Image
          src="/images/content/living-room3.png"
          width={2496}
          height={1404}
          alt="Living room"
        />
      </LayoutColumn>
      <LayoutColumn start={1} end={6} className="col-start-1 col-end-6">
        <Image
          src="/images/content/sofa3.png"
          width={492}
          height={656}
          alt="Sofa"
        />
      </LayoutColumn>
      <LayoutColumn start={7} end={13} className="col-start-7 col-end-13">
        <h3 className="text-3xl mb-8 mt-20">
          The Paloma Haven sofa is a masterpiece of minimalism and luxury.
        </h3>
        <p className="text-md">
          <Link href="/cutup/collection" variant="underline">
            See more out of &apos;Modern Luxe&apos; collection
          </Link>
        </p>
      </LayoutColumn>
      <LayoutColumn className="mt-36">
        <h4 className="text-2xl mb-14">Related products</h4>
        <div className="flex gap-12">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop7.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-6"
            />
            <div className="flex justify-between">
              <div>
                <p className="mb-0.5">Camden Retreat</p>
                <p className="text-gray text-xs">Boho Chic</p>
              </div>
              <div>
                <p className="font-semibold">1000€</p>
              </div>
            </div>
          </Link>
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop8.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-6"
            />
            <div className="flex justify-between">
              <div>
                <p className="mb-0.5">Oslo Drift</p>
                <p className="text-gray text-xs">Scandinavian Simplicity</p>
              </div>
              <div>
                <p className="font-semibold">2000€</p>
              </div>
            </div>
          </Link>
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop9.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-6"
            />
            <div className="flex justify-between">
              <div>
                <p className="mb-0.5">Sutton Royale</p>
                <p className="text-gray text-xs">Modern Luxe</p>
              </div>
              <div>
                <p className="font-semibold">2500€</p>
              </div>
            </div>
          </Link>
        </div>
      </LayoutColumn>
    </Layout>
  )
}
