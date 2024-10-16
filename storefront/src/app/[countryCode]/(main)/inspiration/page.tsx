// External components
import Image from "next/image"

import { Layout, LayoutColumn } from "@/components/Layout"
import { Carousel } from "@/components/Carousel"
import { Button } from "@/components/Button"
import { LocalizedLink } from "@/components/LocalizedLink"

export default function InspirationPage() {
  return (
    <>
      <div className="max-md:pt-18">
        <Image
          src="/images/content/living-room9.png"
          width={2880}
          height={1500}
          alt="Living room"
          className="md:h-screen md:object-cover mb-8 md:mb-26"
        />
      </div>
      <div className="pb-26 md:pb-36">
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-lg mb-6 md:mb-16 md:text-2xl">
              The Astrid Curve sofa is a masterpiece of minimalism and luxury.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                Our design philosophy revolves around creating pieces that are
                both beautiful and practical. Inspired by Scandinavian
                simplicity, modern luxury, and timeless classics.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink href="/products/astrid-curve">
              <Image
                src="/images/content/shop6.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Astrid Curve</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1500€</p>
                </div>
              </div>
            </LocalizedLink>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              src="/images/content/living-room10.png"
              width={2496}
              height={1404}
              alt="Sofa"
              className="mt-26 md:mt-36 mb-8 md:mb-26"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-lg mb-6 md:mb-16 md:text-2xl">
              Haven Sofas have minimalistic designs, neutral colors, and
              high-quality textures.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                Perfect for those who seek comfort with a clean and understated
                aesthetic. This collection brings the essence of Scandinavian
                elegance to your living room.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink
              href="/products/nordic-haven"
              className="mb-8 md:mb-16 inline-block"
            >
              <Image
                src="/images/content/shop1.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Nordic Haven</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1500€</p>
                </div>
              </div>
            </LocalizedLink>
            <LocalizedLink href="/products/nordic-breeze">
              <Image
                src="/images/content/shop3.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Nordic Breeze</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1200€</p>
                </div>
              </div>
            </LocalizedLink>
          </LayoutColumn>
        </Layout>
        <Image
          src="/images/content/living-room4.png"
          width={2880}
          height={1618}
          alt="Living room"
          className="md:h-screen md:object-cover mt-26 md:mt-36 mb-8 md:mb-26"
        />
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-lg mb-6 md:mb-16 md:text-2xl">
              Oslo Drift is infused with playful textures and vibrant patterns
              with eclectic vibes.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                Whether you&apos;re looking for bold statement pieces or subtle
                elegance, this collection elevates your home with a touch of
                glamour, sophistication, and unmatched coziness.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink href="/products/oslo-drift">
              <Image
                src="/images/content/shop12.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Oslo Drift</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
                </div>
                <div>
                  <p className="font-semibold">1500€</p>
                </div>
              </div>
            </LocalizedLink>
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
          className="mt-26 md:mt-36"
        >
          <LocalizedLink href="/collections/scandinavian-simplicity">
            <Image
              src="/images/content/scandinavian-simplicity.png"
              width={992}
              height={1322}
              alt="Scandinavian simplicity"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-4">Scandinavian Simplicity</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Minimalistic designs, neutral colors, and high-quality textures
            </p>
          </LocalizedLink>
          <LocalizedLink href="/collections/modern-luxe">
            <Image
              src="/images/content/modern-luxe.png"
              width={992}
              height={1322}
              alt="Modern luxe"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-4">Modern Luxe</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Sophisticated and sleek, these sofas blend modern design with
              luxurious comfort
            </p>
          </LocalizedLink>
          <LocalizedLink href="/collections/boho-chic">
            <Image
              src="/images/content/boho-chic.png"
              width={992}
              height={1322}
              alt="Boho chic"
              className="mb-4 md:mb-10"
            />
            <h3 className="md:text-lg mb-2 md:mb-4">Boho Chic</h3>
            <p className="text-xs text-grayscale-500 md:text-md">
              Infused with playful textures and vibrant patterns with eclectic
              vibes.
            </p>
          </LocalizedLink>
        </Carousel>
      </div>
    </>
  )
}
