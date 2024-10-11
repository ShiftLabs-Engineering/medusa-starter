"use client"

// External packages
import {
  CheckboxGroup,
  DialogTrigger,
  DialogTriggerProps,
  Popover,
} from "react-aria-components"

// Components
import {
  UiSelectButton,
  UiSelectDialog,
  UiSelectIcon,
} from "components/ui/Select"
import {
  UiCheckbox,
  UiCheckboxBox,
  UiCheckboxIcon,
  UiCheckboxLabel,
} from "components/ui/Checkbox"

export const FilterProductsByColor: React.FC<
  Omit<DialogTriggerProps, "children">
> = ({ ...props }) => (
  <DialogTrigger {...props}>
    <UiSelectButton className="w-25">
      <span>Color</span>
      <UiSelectIcon />
    </UiSelectButton>
    <Popover className="w-60" crossOffset={70}>
      <UiSelectDialog>
        <CheckboxGroup>
          <UiCheckbox value="black">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Black</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="gray">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Gray</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="white">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>White</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="red">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Red</UiCheckboxLabel>
          </UiCheckbox>
        </CheckboxGroup>
      </UiSelectDialog>
    </Popover>
  </DialogTrigger>
)
