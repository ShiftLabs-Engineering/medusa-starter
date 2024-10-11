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
} from "@/components/ui/Select"
import {
  UiCheckbox,
  UiCheckboxBox,
  UiCheckboxIcon,
  UiCheckboxLabel,
} from "@/components/ui/Checkbox"

export const FilterProductsByMaterial: React.FC<
  Omit<DialogTriggerProps, "children">
> = ({ ...props }) => (
  <DialogTrigger {...props}>
    <UiSelectButton className="w-35">
      <span>Materials</span>
      <UiSelectIcon />
    </UiSelectButton>
    <Popover className="w-60" crossOffset={50}>
      <UiSelectDialog>
        <CheckboxGroup>
          <UiCheckbox value="velvet" className="py-3 px-4">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Velvet</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="linen" className="py-3 px-4">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Linen</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="boucle" className="py-3 px-4">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Boucle</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="leather" className="py-3 px-4">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Leather</UiCheckboxLabel>
          </UiCheckbox>
        </CheckboxGroup>
      </UiSelectDialog>
    </Popover>
  </DialogTrigger>
)
