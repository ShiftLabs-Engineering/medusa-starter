"use client"

// External packages
import * as React from "react"
import { Popover, Radio, RadioGroup, Select } from "react-aria-components"

// Components
import {
  UiSelectButton,
  UiSelectIcon,
  UiSelectListBox,
  UiSelectListBoxItem,
  UiSelectValue,
} from "@/components/ui/Select"

export const ColorPicker: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  ...props
}) => (
  <div {...props}>
    <p className="mb-4">
      Materials
      <span className="text-grayscale-500 ml-6">Lumea</span>
    </p>
    <Select placeholder="Choose material" className="w-50 mb-6">
      <UiSelectButton>
        <UiSelectValue />
        <UiSelectIcon />
      </UiSelectButton>
      <Popover className="w-[--trigger-width]">
        <UiSelectListBox>
          <UiSelectListBoxItem>Velvet</UiSelectListBoxItem>
          <UiSelectListBoxItem>Linen</UiSelectListBoxItem>
          <UiSelectListBoxItem>Boucle</UiSelectListBoxItem>
          <UiSelectListBoxItem>Leather</UiSelectListBoxItem>
        </UiSelectListBox>
      </Popover>
    </Select>
    <p className="mb-4">
      Colors
      <span className="text-grayscale-500 ml-6">Dark Gray</span>
    </p>
    <RadioGroup name="color" aria-label="color" className="flex gap-6">
      <Radio
        value="#A2A2A2"
        aria-label="#A2A2A2"
        className="h-8 w-8 cursor-pointer relative before:transition-colors before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-px data-[selected]:before:bg-black"
        style={{ background: "#A2A2A2" }}
      />
      <Radio
        value="#353535"
        aria-label="#353535"
        className="h-8 w-8 cursor-pointer relative before:transition-colors before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-px data-[selected]:before:bg-black"
        style={{ background: "#353535" }}
      />
      <Radio
        value="#E8E8E8"
        aria-label="#E8E8E8"
        className="h-8 w-8 cursor-pointer relative before:transition-colors before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-px data-[selected]:before:bg-black"
        style={{ background: "#E8E8E8" }}
      />
    </RadioGroup>
  </div>
)
