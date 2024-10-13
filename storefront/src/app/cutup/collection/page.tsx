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

export default function CollectionPage() {
  return (
    <>
      <div className="max-md:pt-18">
        <Image
          src="/images/content/living-room4.png"
          width={2880}
          height={1500}
          alt="Living room"
          className="md:h-screen md:object-cover"
        />
      </div>
      <div className="pt-8 md:pt-16 pb-26 md:pb-36">
        <Layout className="mb-6">
          <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
            <h3 className="text-lg max-md:mb-6 md:text-2xl">
              Scandinavian Simplicity:
              <br /> Effortless elegance, timeless comfort
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
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
                              <UiCheckboxLabel>
                                Timeless Classics
                              </UiCheckboxLabel>
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
                src="/images/content/shop3.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Belime Haven</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
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
                src="/images/content/shop7.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Paloma Haven</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
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
                src="/images/content/shop10.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Serena Meadow</p>
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
                src="/images/content/shop11.png"
                width={768}
                height={572}
                alt="Sofa"
                className="mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Velora Luxe</p>
                  <p className="text-grayscale-500 text-xs">
                    Scandinavian Simplicity
                  </p>
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
