"use client"

// External components
import Image from "next/image"

// Components
import { Button, Layout, LayoutColumn, Link, Select } from "components"

export default function ShopPage() {
  return (
    <div className="pt-47 pb-36">
      <Layout className="mb-6">
        <LayoutColumn>
          <h2 className="text-2xl mb-6">Shop</h2>
          <div className="flex justify-between gap-10">
            <div className="flex justify-between gap-6">
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
      <Layout className="gap-x-12 gap-y-16 mb-20">
        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Nordic Haven</p>
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
        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Everly Estate</p>
                <p className="text-grayscale-500 text-xs">Timeless Classics</p>
              </div>
              <div>
                <p className="font-semibold">3000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>

        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Paloma Haven</p>
                <p className="text-grayscale-500 text-xs">Modern Luxe</p>
              </div>
              <div>
                <p className="font-semibold">1200€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Serena Meadow</p>
                <p className="text-grayscale-500 text-xs">Boho Chic</p>
              </div>
              <div>
                <p className="font-semibold">2000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Astrid Curve</p>
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
        <LayoutColumn className="!col-span-4">
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
                <p className="mb-0.5">Velora Luxe</p>
                <p className="text-grayscale-500 text-xs">Modern Luxe</p>
              </div>
              <div>
                <p className="font-semibold">1200€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-4">
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
                <p className="text-grayscale-500 text-xs">Boho Chic</p>
              </div>
              <div>
                <p className="font-semibold">1000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-4">
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
                <p className="text-grayscale-500 text-xs">
                  Scandinavian Simplicity
                </p>
              </div>
              <div>
                <p className="font-semibold">2000€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
        <LayoutColumn className="!col-span-4">
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
