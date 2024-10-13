// External
import { Metadata } from "next"
import Image from "next/image"

// Lib
import { getCollectionsList } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

// Components
import { Button, Carousel, Layout, LayoutColumn, Link } from "components"
import { getProductTypesList } from "@lib/data/product-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

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
    <Layout className="mb-26 md:mb-36 max-md:gap-x-2">
      <LayoutColumn>
        <h3 className="text-lg md:text-2xl mb-8 md:mb-15">Our products</h3>
      </LayoutColumn>
      {productTypes.productTypes.map((productType, index) => (
        <LayoutColumn
          key={productType.id}
          start={index % 2 === 0 ? 1 : 7}
          end={index % 2 === 0 ? 7 : 13}
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
                  alt={productType.value}
                  className="mb-2 md:mb-8"
                />
              )}
            <p className="text-xs md:text-md">{productType.value}</p>
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
      heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
      button={
        <LocalizedClientLink href="/collections" className="md:h-auto">
          <Button size="md" className="h-full flex-1 max-md:hidden">
            View All
          </Button>
          <Button size="sm" className="md:hidden">
            View All
          </Button>
        </LocalizedClientLink>
      }
      className="mb-26 md:mb-36"
    >
      {collections.collections.map((collection) => (
        <LocalizedClientLink
          key={collection.id}
          href={`/collections/${collection.handle}`}
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
                className="mb-4 md:mb-10"
              />
            )}
          <h3 className="md:text-lg mb-2 md:mb-4">{collection.title}</h3>
          {typeof collection.metadata?.description === "string" &&
            collection.metadata?.description.length > 0 && (
              <p className="text-xs text-grayscale-500 md:text-md">
                {collection.metadata.description}
              </p>
            )}
        </LocalizedClientLink>
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
      <div className="max-md:pt-18">
        <Image
          src="/images/content/living-room.png"
          width={2880}
          height={1500}
          alt="Living room"
          className="md:h-screen md:object-cover"
        />
      </div>
      <div className="pt-8 pb-26 md:pt-26 md:pb-36">
        <Layout className="mb-26 md:mb-34">
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-2xl">
              Elevate Your Living Space with Unmatched Comfort & Style
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
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
            <h3 className="text-lg md:text-2xl mb-8 md:mb-15">
              About Sofa Society
            </h3>
            <Image
              src="/images/content/sofa2.png"
              width={2496}
              height={1400}
              alt="Sofa"
              className="mb-8 md:mb-16 max-md:aspect-[3/2] max-md:object-cover"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
            <h2 className="text-lg md:text-2xl">
              At Sofa Society, we believe that a sofa is the heart of every
              home.
            </h2>
          </LayoutColumn>
          <LayoutColumn
            start={{ base: 1, md: 8 }}
            end={13}
            className="mt-6 md:mt-19"
          >
            <div className="md:text-md">
              <p className="mb-5 md:mb-9">
                We are dedicated to delivering high-quality, thoughtfully
                designed sofas that merge comfort and style effortlessly.
              </p>
              <p className="mb-5 md:mb-3">
                Our mission is to transform your living space into a sanctuary
                of relaxation and beauty, with products built to last.
              </p>
              <Link href="/cutup" variant="underline">
                Read more about Sofa Society
              </Link>
            </div>
          </LayoutColumn>
        </Layout>
      </div>
    </>
  )
}
