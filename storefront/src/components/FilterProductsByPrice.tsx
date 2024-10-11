"use client"

// External packages
import {
  DialogTrigger,
  DialogTriggerProps,
  Popover,
  Slider,
} from "react-aria-components"

// Components
import {
  UiSelectButton,
  UiSelectDialog,
  UiSelectIcon,
} from "components/ui/Select"
import {
  UiSliderOutput,
  UiSliderOutputValue,
  UiSliderThumb,
  UiSliderTrack,
} from "components/ui/Slider"

export const FilterProductsByPrice: React.FC<
  Omit<DialogTriggerProps, "children">
> = ({ ...props }) => (
  <DialogTrigger {...props}>
    <UiSelectButton className="w-25">
      <span>Price</span>
      <UiSelectIcon />
    </UiSelectButton>
    <Popover className="w-60" crossOffset={70}>
      <UiSelectDialog className="pt-6 pb-4 px-6">
        <Slider defaultValue={[0, 5000]} minValue={0} maxValue={5000}>
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
      </UiSelectDialog>
    </Popover>
  </DialogTrigger>
)
