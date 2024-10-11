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

export const FilterCollection: React.FC<
  Omit<DialogTriggerProps, "children">
> = ({ ...props }) => (
  <DialogTrigger {...props}>
    <UiSelectButton className="w-35">
      <span>Collection</span>
      <UiSelectIcon aria-hidden="true" />
    </UiSelectButton>
    <Popover className="w-64" crossOffset={58}>
      <UiSelectDialog>
        <CheckboxGroup>
          <UiCheckbox value="scandinavian-simplicity">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Scandinavian Simplicity</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="modern-luxe">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Modern Luxe</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="boho-chic">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Boho Chic</UiCheckboxLabel>
          </UiCheckbox>
          <UiCheckbox value="timeless-classics">
            <UiCheckboxBox>
              <UiCheckboxIcon />
            </UiCheckboxBox>
            <UiCheckboxLabel>Timeless Classics</UiCheckboxLabel>
          </UiCheckbox>
        </CheckboxGroup>
      </UiSelectDialog>
    </Popover>
  </DialogTrigger>
)
