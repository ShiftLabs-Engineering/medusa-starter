"use client"

// External components
import Image from "next/image"

// Components
import {
  Button,
  Carousel,
  Layout,
  LayoutColumn,
  Link,
  Select,
} from "components"

export default function ShopPage() {
  return (
    <div className="md:pt-47 py-26 md:pb-36">
      <Carousel
        heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
        className="mb-26 md:mb-36"
        disableOnDesktop
      >
        <Link href="/cutup/collections">
          <Image
            src="/images/content/scandinavian-simplicity.png"
            width={992}
            height={1322}
            alt="Scandinavian simplicity"
            className="mb-4 md:mb-6"
          />
          <h3>Scandinavian Simplicity</h3>
        </Link>
        <Link href="/cutup/collections">
          <Image
            src="/images/content/modern-luxe.png"
            width={992}
            height={1322}
            alt="Modern luxe"
            className="mb-4 md:mb-6"
          />
          <h3>Modern Luxe</h3>
        </Link>
        <Link href="/cutup/collections">
          <Image
            src="/images/content/scandinavian-simplicity.png"
            width={992}
            height={1322}
            alt="Scandinavian simplicity"
            className="mb-4 md:mb-6"
          />
          <h3>Boho Chic</h3>
        </Link>
        <Link href="/cutup/collections">
          <Image
            src="/images/content/modern-luxe.png"
            width={992}
            height={1322}
            alt="Modern luxe"
            className="mb-4 md:mb-6"
          />
          <h3>Modern Luxe</h3>
        </Link>
      </Carousel>
      <Layout className="mb-4 md:mb-6">
        <LayoutColumn>
          <h2 className="text-lg md:text-2xl mb-6">Shop</h2>
          <div className="flex justify-between gap-10">
            <Button
              iconName="plus"
              iconPosition="end"
              className="bg-white border px-4 hover:bg-white border-grayscale-200 h-auto flex-1 grow-0 text-black"
            >
              Filter
            </Button>
            <div className="flex justify-between gap-6 max-md:hidden">
              <Button variant="ghost" className="px-2">
                Price
              </Button>
              <Button variant="ghost" className="px-2">
                Color
              </Button>
              <Button variant="ghost" className="px-2">
                Materials
              </Button>
              <Button variant="ghost" className="px-2">
                Collection
              </Button>
              <Button variant="ghost" className="px-2">
                Seats
              </Button>
            </div>
            <Select
              name="Sort by"
              options={{
                sortBy: "Sort by",
                featured: "Featured",
                bestSelling: "Best selling",
                lowestPrice: "Lowest price",
                highestPrice: "Highest price",
              }}
              value="sortBy"
              contentProps={{ align: "end" }}
              onValueChange={() => console.log()}
            />
          </div>
        </LayoutColumn>
      </Layout>
      <Layout className="gap-y-10 md:gap-y-16 mb-16 md:mb-20">
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop1.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Nordic Haven</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Scandinavian Simplicity
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">1000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop2.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Everly Estate</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Timeless Classics
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">3000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop3.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Paloma Haven</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Modern Luxe
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">1200€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop4.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Serena Meadow</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Boho Chic
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">2000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop5.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Astrid Curve</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Scandinavian Simplicity
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">1800€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop6.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Velora Luxe</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Modern Luxe
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">1200€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop7.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Camden Retreat</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Boho Chic
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">1000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop8.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Oslo Drift</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Scandinavian Simplicity
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">2000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="md:col-span-4 !col-span-6">
          <Link href="/cutup/product">
            <Image
              src="/images/content/shop9.png"
              width={768}
              height={572}
              alt="Sofa"
              className="mb-4 md:mb-6"
            />
            <div className="flex justify-between max-md:flex-col">
              <div className="max-md:text-xs">
                <p className="mb-1">Sutton Royale</p>
                <p className="text-grayscale-500 text-xs max-md:hidden">
                  Modern Luxe
                </p>
              </div>
              <div>
                <p className="font-semibold max-md:text-xs">2500€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
      </Layout>
      <Layout>
        <LayoutColumn>
          <div className="text-center">
            <Button>View All</Button>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
