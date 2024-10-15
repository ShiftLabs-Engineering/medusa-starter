"use client"

// External components
import Image from "next/image"
import {
  CheckboxGroup,
  Dialog,
  DialogTrigger,
  Label,
  Modal,
  ModalOverlay,
  RadioGroup,
  Slider,
} from "react-aria-components"

// Components
import {
  Button,
  Carousel,
  Layout,
  LayoutColumn,
  Link,
  FilterProductsByPrice,
  FilterProductsByColor,
  FilterProductsByMaterial,
  FilterProductsByCollection,
  SortProducts,
} from "components"
import {
  UiSliderOutput,
  UiSliderOutputValue,
  UiSliderThumb,
  UiSliderTrack,
} from "@/components/ui/Slider"
import {
  UiCheckbox,
  UiCheckboxBox,
  UiCheckboxIcon,
  UiCheckboxLabel,
} from "@/components/ui/Checkbox"
import { UiRadio, UiRadioBox, UiRadioLabel } from "@/components/ui/Radio"

export default function ShopPage() {
  return (
    <div className="md:pt-46 py-26 md:pb-36">
      <Carousel
        heading={<h3 className="text-lg md:text-2xl">Collections</h3>}
        button={
          <Button size="sm" className="md:hidden">
            View All
          </Button>
        }
        className="mb-26 md:mb-35"
        disableOnDesktop
      >
        <Link href="/cutup/collection">
          <Image
            src="/images/content/scandinavian-simplicity.png"
            width={992}
            height={1322}
            alt="Scandinavian simplicity"
            className="mb-4 md:mb-6"
          />
          <h3 className="mb-2">Scandinavian Simplicity</h3>
          <p className="text-xs text-grayscale-500">
            Minimalistic designs, neutral colors, and high-quality textures
          </p>
        </Link>
        <Link href="/cutup/collection">
          <Image
            src="/images/content/modern-luxe.png"
            width={992}
            height={1322}
            alt="Modern luxe"
            className="mb-4 md:mb-6"
          />
          <h3 className="mb-2">Modern Luxe</h3>
          <p className="text-xs text-grayscale-500">
            Sophisticated and sleek, these sofas blend modern design with
            luxurious comfort
          </p>
        </Link>
        <Link href="/cutup/collection">
          <Image
            src="/images/content/boho-chic.png"
            width={992}
            height={1322}
            alt="Boho Chic"
            className="mb-4 md:mb-6"
          />
          <h3 className="mb-2">Boho Chic</h3>
          <p className="text-xs text-grayscale-500">
            Infused with playful textures and vibrant patterns with eclectic
            vibes.
          </p>
        </Link>
        <Link href="/cutup/collection">
          <Image
            src="/images/content/timeless-classics.png"
            width={992}
            height={1322}
            alt="Timeless Classics"
            className="mb-4 md:mb-6"
          />
          <h3 className="mb-2">Timeless Classics</h3>
          <p className="text-xs text-grayscale-500">
            Elegant shapes, rich textures, traditional craftsmanship with modern
            comfort
          </p>
        </Link>
      </Carousel>
      <Layout className="mb-6 md:mb-8">
        <LayoutColumn>
          <h2 className="text-lg md:text-2xl mb-6 md:mb-8">Shop</h2>
          <div className="flex justify-between gap-10">
            <DialogTrigger>
              <Button
                iconName="plus"
                iconPosition="end"
                className="bg-white md:hidden max-md:gap-1 border max-md:text-xs px-3 md:px-4 hover:bg-white border-grayscale-200 h-8 text-black"
              >
                Filter
              </Button>
              <ModalOverlay
                isDismissable
                className="fixed top-0 left-0 w-full h-full bg-black-10%"
              >
                <Modal className="bg-white absolute bottom-0 left-0 w-full max-h-full overflow-y-scroll p-6 pb-21">
                  <Dialog className="focus-visible:outline-none">
                    {({ close }) => (
                      <>
                        <p className="text-md font-semibold mb-6">Price</p>
                        <Slider
                          defaultValue={[0, 5000]}
                          minValue={0}
                          maxValue={5000}
                        >
                          <UiSliderTrack>
                            {({ state }) =>
                              state.values.map((_, i) => (
                                <UiSliderThumb
                                  key={i}
                                  index={i}
                                  aria-label={["start", "end"]?.[i]}
                                />
                              ))
                            }
                          </UiSliderTrack>
                          <UiSliderOutput>
                            {({ state }) =>
                              state.values.map((_, i) => (
                                <UiSliderOutputValue key={i}>
                                  {state.getThumbValueLabel(i)}
                                </UiSliderOutputValue>
                              ))
                            }
                          </UiSliderOutput>
                        </Slider>
                        <hr className="my-6" />
                        <CheckboxGroup className="flex flex-col">
                          <Label className="block text-md font-semibold mb-3">
                            Color
                          </Label>
                          <UiCheckbox
                            value="black"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Black</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="gray"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Gray</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="white"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>White</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="red"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Red</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                        </CheckboxGroup>
                        <hr className="my-6" />
                        <CheckboxGroup className="flex flex-col">
                          <Label className="block text-md font-semibold mb-3">
                            Materials
                          </Label>
                          <UiCheckbox
                            value="velvet"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Velvet</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="linen"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Linen</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="boucle"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Boucle</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="leather"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Leather</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                        </CheckboxGroup>
                        <hr className="my-6" />
                        <CheckboxGroup className="flex flex-col mb-5">
                          <Label className="block text-md font-semibold mb-3">
                            Collection
                          </Label>
                          <UiCheckbox
                            value="scandinavian-simplicity"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>
                              Scandinavian Simplicity
                            </UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="modern-luxe"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Modern Luxe</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="boho-chic"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Boho Chic</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                          <UiCheckbox
                            value="timeless-classics"
                            className="justify-between py-3"
                          >
                            <UiCheckboxLabel>Timeless Classics</UiCheckboxLabel>
                            <UiCheckboxBox>
                              <UiCheckboxIcon />
                            </UiCheckboxBox>
                          </UiCheckbox>
                        </CheckboxGroup>
                        <footer className="flex items-center h-21 fixed bottom-0 left-0 w-full bg-white px-6 border-t border-grayscale-100">
                          <Button isFullWidth onPress={close}>
                            Show results
                          </Button>
                        </footer>
                      </>
                    )}
                  </Dialog>
                </Modal>
              </ModalOverlay>
            </DialogTrigger>
            <div className="flex justify-between gap-4 max-md:hidden">
              <FilterProductsByPrice />
              <FilterProductsByColor />
              <FilterProductsByMaterial />
              <FilterProductsByCollection />
            </div>
            <DialogTrigger>
              <Button
                iconName="chevron-down"
                iconPosition="end"
                className="bg-white md:hidden max-md:gap-1 border max-md:text-xs px-3 md:px-4 hover:bg-white border-grayscale-200 h-8 grow-0 text-black"
              >
                Sort by
              </Button>
              <ModalOverlay
                isDismissable
                className="fixed top-0 left-0 w-full h-full bg-black-10%"
              >
                <Modal className="bg-white absolute bottom-0 left-0 w-full max-h-full overflow-y-scroll p-6 pb-21">
                  <Dialog className="focus-visible:outline-none">
                    {({ close }) => (
                      <>
                        <RadioGroup className="flex flex-col mb-5">
                          <Label className="block text-md font-semibold mb-3">
                            Sort by
                          </Label>
                          <UiRadio
                            value="featured"
                            className="justify-between py-3"
                          >
                            <UiRadioLabel>Featured</UiRadioLabel>
                            <UiRadioBox />
                          </UiRadio>
                          <UiRadio
                            value="best-selling"
                            className="justify-between py-3"
                          >
                            <UiRadioLabel>Best selling</UiRadioLabel>
                            <UiRadioBox />
                          </UiRadio>
                          <UiRadio
                            value="lowest-price"
                            className="justify-between py-3"
                          >
                            <UiRadioLabel>Lowest price</UiRadioLabel>
                            <UiRadioBox />
                          </UiRadio>
                          <UiRadio
                            value="highest-price"
                            className="justify-between py-3"
                          >
                            <UiRadioLabel>Highest price</UiRadioLabel>
                            <UiRadioBox />
                          </UiRadio>
                        </RadioGroup>
                        <footer className="flex items-center h-21 fixed bottom-0 left-0 w-full bg-white px-6 border-t border-grayscale-100">
                          <Button isFullWidth onPress={close}>
                            Show results
                          </Button>
                        </footer>
                      </>
                    )}
                  </Dialog>
                </Modal>
              </ModalOverlay>
            </DialogTrigger>
            <SortProducts className="max-md:hidden" />
          </div>
        </LayoutColumn>
      </Layout>
      <Layout className="gap-y-10 md:gap-y-16 mb-16">
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
                <p className="mb-1">Belime Haven</p>
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
        <LayoutColumn className="md:!col-span-4 !col-span-6">
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
            <Button className="h-10">View All</Button>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
