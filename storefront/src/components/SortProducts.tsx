"use client"

// External packages
import { Popover, Select, SelectProps } from "react-aria-components"

// Components
import {
  UiSelectButton,
  UiSelectIcon,
  UiSelectListBox,
  UiSelectListBoxItem,
  UiSelectValue,
} from "components/ui/Select"

export const SortProducts = <T extends object>({
  ...props
}: SelectProps<T>) => (
  <Select {...props} placeholder="Sort by" className="w-42">
    <UiSelectButton>
      <UiSelectValue />
      <UiSelectIcon />
    </UiSelectButton>
    <Popover className="w-[--trigger-width]">
      <UiSelectListBox>
        <UiSelectListBoxItem>Featured</UiSelectListBoxItem>
        <UiSelectListBoxItem>Best selling</UiSelectListBoxItem>
        <UiSelectListBoxItem>Lowest price</UiSelectListBoxItem>
        <UiSelectListBoxItem>Highest price</UiSelectListBoxItem>
      </UiSelectListBox>
    </Popover>
  </Select>
)
