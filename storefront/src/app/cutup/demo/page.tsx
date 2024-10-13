"use client"

// External packages
import {
  CheckboxGroup,
  Dialog,
  DialogTrigger,
  Label,
  Modal,
  ModalOverlay,
  Radio,
  RadioGroup,
  Slider,
} from "react-aria-components"

// Components
import { Button, Layout, LayoutColumn } from "components"
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

export default function ProductPage() {
  return (
    <Layout className="pt-47 pb-32">
      <LayoutColumn>
        <DialogTrigger>
          <Button>Filter modal</Button>
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
                      <UiCheckbox value="gray" className="justify-between py-3">
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
                      <UiCheckbox value="red" className="justify-between py-3">
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
        <DialogTrigger>
          <Button>Sort modal</Button>
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
      </LayoutColumn>
    </Layout>
  )
}
