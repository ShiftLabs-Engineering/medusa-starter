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
} from "components"
import { Form } from "components/Form/Form"

export default function ProductPage() {
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
    <div className="pt-18 md:pt-26 lg:pt-37 pb-23 md:pb-36">
      <ProductPageGallery className="md:hidden">
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
      <Layout>
        <LayoutColumn className="mb-26 md:mb-36">
          <div className="flex max-lg:flex-col gap-8 xl:gap-27">
            <div className="lg:w-1/2 flex flex-1 flex-col gap-8">
              <ProductPageGallery className="max-md:hidden">
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
                <p className="text-grayscale-500 mb-2">Modern Luxe</p>
                <h1 className="text-md md:text-xl mb-2">Paloma Haven</h1>
                <p className="text-md mb-8">€12000</p>
                <div className="max-md:text-xs mb-8 md:mb-16 max-w-120">
                  <p>
                    Minimalistic designs, neutral colors, and high-quality
                    textures. Perfect for those who seek comfort with a clean
                    and understated aesthetic. This collection brings the
                    essence of Scandinavian elegance to your living room.
                  </p>
                </div>
                <ColorPicker className="mb-10 md:mb-26" />
                <div className="flex max-sm:flex-col gap-4 mb-4">
                  <NumberField
                    defaultValue={1}
                    minValue={1}
                    className="w-full sm:w-35 max-md:justify-center max-md:gap-2"
                  />
                  <Button className="sm:flex-1">Add to cart</Button>
                </div>
                <p className="text-grayscale-500 max-md:text-xs">
                  Estimate delivery 2-3 days
                </p>
              </Form>
            </div>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <h2 className="text-lg md:text-2xl mb-8 md:mb-6">
            Collection Inspired Interior
          </h2>
          <Image
            src="/images/content/living-room2.png"
            width={2496}
            height={1404}
            alt="Living room"
            className="mb-8 md:mb-20 max-md:aspect-[3/2] max-md:object-cover"
          />
        </LayoutColumn>
      </Layout>
      <Image
        src="/images/content/living-room3.png"
        width={2496}
        height={1404}
        alt="Living room"
        className="mb-8 md:mb-20 max-md:aspect-[3/2] max-md:object-cover"
      />
      <Layout>
        <LayoutColumn start={1} end={{ base: 10, md: 6 }}>
          <Image
            src="/images/content/sofa3.png"
            width={492}
            height={656}
            alt="Sofa"
          />
        </LayoutColumn>
        <LayoutColumn start={{ base: 1, md: 7 }} end={13}>
          <h3 className="text-md md:text-2xl my-8 md:mt-20">
            The Paloma Haven sofa is a masterpiece of minimalism and luxury.
          </h3>
          <p className="text-base md:text-md">
            <Link href="/cutup/collection" variant="underline">
              See more out of &apos;Modern Luxe&apos; collection
            </Link>
          </p>
        </LayoutColumn>
        <LayoutColumn className="mt-26 md:mt-36">
          <h4 className="text-lg md:text-2xl mb-8 md:mb-16">
            Related products
          </h4>
        </LayoutColumn>
        <LayoutColumn className="!col-span-6 md:!col-span-4">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop7.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex max-md:flex-col max-md:gap-y-1 max-md:text-xs justify-between">
              <div>
                <p className="mb-0.5">Camden Retreat</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Boho Chic
                </p>
              </div>
              <div>
                <p className="font-semibold">1000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-6 md:!col-span-4">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop8.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex max-md:flex-col max-md:gap-y-1 max-md:text-xs justify-between">
              <div>
                <p className="mb-0.5">Oslo Drift</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Scandinavian Simplicity
                </p>
              </div>
              <div>
                <p className="font-semibold">2000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-6 md:!col-span-4 max-md:hidden">
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
                <p className="text-grayscale-500 text-xs">Modern Luxe</p>
              </div>
              <div>
                <p className="font-semibold">2500€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
