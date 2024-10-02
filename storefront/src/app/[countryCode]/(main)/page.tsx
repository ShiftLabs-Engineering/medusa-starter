// External
import { Metadata } from "next"
import Image from "next/image"

// Lib
import { getCollectionsList } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

// Components
import { Button, Carousel, Layout, LayoutColumn, Link } from "components"
import { getProductTypesList } from "@lib/data/product-types"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const ProductTypesSection: React.FC<{ countryCode: string }> = async ({
  countryCode,
}) => {
  const productTypes = await getProductTypesList(0, 20, [
    "id",
    "value",
    "metadata",
  ])

  if (!productTypes) {
    return null
  }

  return (
    <Layout className="gap-x-12 mb-36">
      <LayoutColumn className="col-span-full">
        <h3 className="text-2xl mb-16">Our products</h3>
      </LayoutColumn>
      {productTypes.productTypes.map((productType, index) => (
        <LayoutColumn
          key={productType.id}
          start={index % 2 === 0 ? 1 : 7}
          end={index % 2 === 0 ? 7 : 12}
          className={
            index % 2 === 0 ? "col-start-1 col-end-7" : "col-start-7 col-end-13"
          }
        >
          <Link href={`/${countryCode}/store?type=${productType.id}`}>
            {typeof productType.metadata?.image === "object" &&
              productType.metadata.image &&
              "url" in productType.metadata.image &&
              typeof productType.metadata.image.url === "string" && (
                <Image
                  src={productType.metadata.image.url}
                  width={1200}
                  height={900}
                  alt="Sofa"
                  className="mb-8"
                />
              )}
            <p className="text-md">{productType.value}</p>
          </Link>
        </LayoutColumn>
      ))}
    </Layout>
  )
}

const CollectionsSection: React.FC<{ countryCode: string }> = async ({
  countryCode,
}) => {
  const collections = await getCollectionsList(0, 20, [
    "id",
    "title",
    "handle",
    "metadata",
  ])

  if (!collections) {
    return null
  }

  return (
    <Carousel
      heading={<h3 className="text-2xl">Collections</h3>}
      button={
        <Button size="sm" className="rounded-lg">
          View All
        </Button>
      }
      className="mb-36"
    >
      {collections.collections.map((collection) => (
        <Link
          key={collection.id}
          href={`/${countryCode}/collections/${collection.handle}`}
        >
          {typeof collection.metadata?.image === "object" &&
            collection.metadata.image &&
            "url" in collection.metadata.image &&
            typeof collection.metadata.image.url === "string" && (
              <Image
                src={collection.metadata.image.url}
                width={992}
                height={1322}
                alt={collection.title}
                className="mb-10"
              />
            )}
          <h3 className="text-lg mb-6">{collection.title}</h3>
          {typeof collection.metadata?.description === "string" &&
            collection.metadata?.description.length > 0 && (
              <p className="text-md">
                Minimalistic designs, neutral colors, and high-quality textures
              </p>
            )}
        </Link>
      ))}
    </Carousel>
  )
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      <div>
        <Image
          src="/images/content/living-room.png"
          width={2880}
          height={1500}
          alt="Living room"
          className="h-screen object-cover"
        />
      </div>
      <div className="pt-26 pb-36">
        <Layout className="mb-36">
          <LayoutColumn start={1} end={8} className="col-start-1 col-end-8">
            <h3 className="text-2xl">
              Elevate Your Living Space with Unmatched Comfort & Style
            </h3>
          </LayoutColumn>
          <LayoutColumn start={9} end={13} className="col-start-9 col-end-13">
            <div className="flex items-center h-full">
              <div className="text-md">
                <p>Discover Your Perfect Sofa Today</p>
                <Link href={`/${countryCode}/store`} variant="underline">
                  Explore Now
                </Link>
              </div>
            </div>
          </LayoutColumn>
        </Layout>
        <ProductTypesSection countryCode={countryCode} />
        <CollectionsSection countryCode={countryCode} />
        <Layout>
          <LayoutColumn className="col-span-full">
            <h3 className="text-2xl mb-16">About Sofa Society</h3>
            <Image
              src="/images/content/sofa2.png"
              width={2496}
              height={1400}
              alt="Sofa"
              className="mb-16"
            />
          </LayoutColumn>
          <LayoutColumn className="col-start-1 col-end-7">
            <h2 className="text-3xl">
              At Sofa Society, we believe that a sofa is the heart of every
              home.
            </h2>
          </LayoutColumn>
          <LayoutColumn className="col-start-8 col-end-13 mt-19">
            <div className="text-md">
              <p className="mb-9">
                We are dedicated to delivering high-quality, thoughtfully
                designed sofas that merge comfort and style effortlessly.
              </p>
              <p className="mb-4">
                Our mission is to transform your living space into a sanctuary
                of relaxation and beauty, with products built to last.
              </p>
              <Link href={`/${countryCode}/about`} variant="underline">
                Read more about Sofa Society
              </Link>
            </div>
          </LayoutColumn>
        </Layout>
      </div>
    </>
  )
}
