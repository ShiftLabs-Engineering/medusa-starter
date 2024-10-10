// External components
import Image from "next/image"

// Components
import { Button, Carousel, Layout, LayoutColumn, Link } from "components"

export default function HomePage() {
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
      <div className="pt-8 pb-26 md:pt-26 md:pb-36">
        <Layout className="mb-26 md:mb-36">
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-lg max-md:mb-6 md:text-2xl">
              Elevate Your Living Space with Unmatched Comfort & Style
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <div className="flex items-center h-full">
              <div className="md:text-md">
                <p>Discover Your Perfect Sofa Today</p>
                <Link href="/cutup" variant="underline">
                  Explore Now
                </Link>
              </div>
            </div>
          </LayoutColumn>
        </Layout>
        <Layout className="mb-26 md:mb-36">
          <LayoutColumn>
            <h3 className="text-lg md:text-2xl mb-8 md:mb-16">Our products</h3>
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 7, md: 7 }}>
            <Link href="/cutup">
              <Image
                src="/images/content/sofa.png"
                width={1200}
                height={900}
                alt="Sofa"
                className="mb-2 md:mb-8"
              />
              <p className="text-xs md:text-md">Sofas</p>
            </Link>
          </LayoutColumn>
          <LayoutColumn start={7} end={13}>
            <Link href="/cutup">
              <Image
                src="/images/content/arm-chair.png"
                width={1200}
                height={900}
                alt="Arm chair"
                className="mb-2 md:mb-8"
              />
              <p className="text-xs md:text-md">Arm Chairs</p>
            </Link>
          </LayoutColumn>
        </Layout>
        <Carousel
          heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
          button={
            <>
              <Button size="md" className="h-auto flex-1 max-md:hidden">
                View All
              </Button>
              <Button size="sm" className="md:hidden">
                View All
              </Button>
            </>
          }
          className="mb-26 md:mb-36"
        >
          <Link href="/cutup/collection">
            <Image
              src="/images/content/scandinavian-simplicity.png"
              width={992}
              height={1322}
              alt="Scandinavian simplicity"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-6">Scandinavian Simplicity</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Minimalistic designs, neutral colors, and high-quality textures
            </p>
          </Link>
          <Link href="/cutup/collection">
            <Image
              src="/images/content/modern-luxe.png"
              width={992}
              height={1322}
              alt="Modern luxe"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-6">Modern Luxe</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Sophisticated and sleek, these sofas blend modern design with
              luxurious comfort
            </p>
          </Link>
          <Link href="/cutup/collection">
            <Image
              src="/images/content/scandinavian-simplicity.png"
              width={992}
              height={1322}
              alt="Scandinavian simplicity"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-6">Boho Chic</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Infused with playful textures and vibrant patterns with eclectic
              vibes.
            </p>
          </Link>
          <Link href="/cutup/collection">
            <Image
              src="/images/content/modern-luxe.png"
              width={992}
              height={1322}
              alt="Modern luxe"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-6">Modern Luxe</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Sophisticated and sleek, these sofas blend modern design with
              luxurious comfort
            </p>
          </Link>
          <Link href="/cutup/collection">
            <Image
              src="/images/content/scandinavian-simplicity.png"
              width={992}
              height={1322}
              alt="Scandinavian simplicity"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-6">Boho Chic</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Infused with playful textures and vibrant patterns with eclectic
              vibes.
            </p>
          </Link>
        </Carousel>
        <Layout>
          <LayoutColumn>
            <h3 className="text-lg md:text-2xl mb-8 md:mb-16">
              About Sofa Society
            </h3>
            <Image
              src="/images/content/sofa2.png"
              width={2496}
              height={1400}
              alt="Sofa"
              className="mb-8 md:mb-16 max-md:aspect-[3/2] object-cover"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
            <h2 className="text-lg md:text-3xl">
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
              <p className="mb-6 md:mb-9">
                We are dedicated to delivering high-quality, thoughtfully
                designed sofas that merge comfort and style effortlessly.
              </p>
              <p className="mb-6">
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
