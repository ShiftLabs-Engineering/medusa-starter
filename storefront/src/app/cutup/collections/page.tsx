// External components
import Image from "next/image"

// Components
import { Button, Layout, LayoutColumn, Link } from "components"

export default function CollectionsPage() {
  return (
    <div className="pt-47 pb-36">
      <Layout className="mb-6">
        <LayoutColumn className="mb-36">
          <h2 className="mb-8 text-2xl">Collections</h2>
          <div className="flex gap-6">
            <Link href="/cutup/collections">
              <Image
                src="/images/content/scandinavian-simplicity.png"
                width={992}
                height={1322}
                alt="Scandinavian simplicity"
                className="mb-6"
              />
              <p>Scandinavian Simplicity</p>
            </Link>
            <Link href="/cutup/collections">
              <Image
                src="/images/content/modern-luxe.png"
                width={992}
                height={1322}
                alt="Modern luxe"
                className="mb-6"
              />
              <p>Modern Luxe</p>
            </Link>
            <Link href="/cutup/collections">
              <Image
                src="/images/content/scandinavian-simplicity.png"
                width={992}
                height={1322}
                alt="Scandinavian simplicity"
                className="mb-6"
              />
              <p>Boho Chic</p>
            </Link>
            <Link href="/cutup/collections">
              <Image
                src="/images/content/modern-luxe.png"
                width={992}
                height={1322}
                alt="Modern luxe"
                className="mb-6"
              />
              <p>Timeless Classics</p>
            </Link>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <h2 className="text-2xl mb-6">Shop</h2>
          <div className="flex justify-between gap-10">
            <div className="flex justify-between gap-6">
              <Button variant="ghost" iconName="sliders" className="px-2 gap-1">
                Filters
              </Button>
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
            <Button
              variant="ghost"
              iconName="chevron-down"
              iconPosition="end"
              className="px-2 gap-1 [&>svg]:w-6"
            >
              Sort
            </Button>
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
                <p className="text-gray text-xs">Scandinavian Simplicity</p>
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
                <p className="text-gray text-xs">Timeless Classics</p>
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
                <p className="text-gray text-xs">Modern Luxe</p>
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
                <p className="text-gray text-xs">Boho Chic</p>
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
                <p className="text-gray text-xs">Scandinavian Simplicity</p>
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
                <p className="text-gray text-xs">Modern Luxe</p>
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
                <p className="text-gray text-xs">Boho Chic</p>
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
                <p className="text-gray text-xs">Scandinavian Simplicity</p>
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
                <p className="text-gray text-xs">Modern Luxe</p>
              </div>
              <div>
                <p className="font-semibold">2500€</p>
              </div>
            </div>
          </Link>
        </LayoutColumn>
      </Layout>
      <Layout>
        <LayoutColumn className="col-span-full">
          <div className="text-center">
            <Button>View All</Button>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
