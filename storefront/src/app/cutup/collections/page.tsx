// External components
import Image from "next/image"

// Components
import { Layout, LayoutColumn, Link } from "components"
import { FilterPrice } from "./FilterPrice"
import { FilterColor } from "./FilterColor"
import { FilterMaterial } from "./FilterMaterial"
import { FilterCollection } from "./FilterCollection"
import { Sort } from "./Sort"

export default function CollectionsPage() {
  return (
    <>
      <div>
        <Image
          src="/images/content/living-room3.png"
          width={2880}
          height={1500}
          alt="Living room"
          className="h-screen object-cover"
        />
      </div>
      <div className="pt-8 md:pt-16 pb-26 md:pb-36">
        <Layout className="mb-6">
          <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
            <h3 className="text-lg max-md:mb-6 md:text-2xl">
              Scandinavian Simplicity:
              <br /> Effortless elegance, timeless comfort
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 8 }} end={13}>
            <div className="md:text-md md:mt-18">
              <p className="mb-6 md:mb-8">
                Minimalistic designs, neutral colors, and high-quality textures.
                Perfect for those who seek comfort with a clean and understated
                aesthetic.
              </p>
              <p>
                This collection brings the essence of Scandinavian elegance to
                your living room.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn>
            <h2 className="text-lg md:text-2xl mb-6 mt-26 md:mt-36">
              Scandinavian Simplicity
            </h2>
            <div className="flex justify-between gap-10">
              <div className="flex justify-between gap-4">
                <FilterPrice />
                <FilterColor />
                <FilterMaterial />
                <FilterCollection />
              </div>
              <Sort />
            </div>
          </LayoutColumn>
        </Layout>
        <Layout className="gap-y-16 mb-20">
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop1.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Nordic Haven</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1000€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop2.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Everly Estate</p>
                  <p className="text-grayscale-500 text-xs">
                    Timeless Classics
                  </p>
                </div>
                <div>
                  <p className="font-semibold">3000€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop3.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Paloma Haven</p>
                  <p className="text-grayscale-500 text-xs">Modern Luxe</p>
                </div>
                <div>
                  <p className="font-semibold">1200€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop4.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Serena Meadow</p>
                  <p className="text-grayscale-500 text-xs">Boho Chic</p>
                </div>
                <div>
                  <p className="font-semibold">2000€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop5.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Astrid Curve</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1800€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
          <LayoutColumn className="md:!col-span-4 !col-span-6">
            <Link href="/cutup/product">
              <Image
                src="/images/content/shop6.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Velora Luxe</p>
                  <p className="text-grayscale-500 text-xs">Modern Luxe</p>
                </div>
                <div>
                  <p className="font-semibold text-red-900">1200€</p>
                  <p className="text-grayscale-500 line-through">3000€</p>
                </div>
              </div>
            </Link>
          </LayoutColumn>
        </Layout>
      </div>
    </>
  )
}
