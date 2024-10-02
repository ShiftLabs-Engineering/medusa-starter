"use client"

import { Dispatch } from "react"
// External packages
import * as ReactAria from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface ColorPickerGroupOwnProps {
  selected: string | null
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

type ColorPickerGroupOProps = React.ComponentPropsWithoutRef<"div"> &
  ReactAria.RadioGroupProps &
  ColorPickerGroupOwnProps

export const ColorPickerGroup: React.FC<ColorPickerGroupOProps> = ({
  selected,
  setSelected,
  children,
  className,
  ...rest
}) => (
  <ReactAria.RadioGroup {...rest} className={className}>
    <p className="mb-4">
      Color<span className="text-gray ml-4">{selected}</span>
    </p>
    <div className="flex gap-4">{children}</div>
  </ReactAria.RadioGroup>
)

export const ColorPickerGroupItem: React.FC<
  React.ComponentPropsWithoutRef<"label"> & ReactAria.RadioProps
> = ({ className, ...rest }) => (
  <ReactAria.Radio
    {...rest}
    className={twMerge(
      "h-8 w-8 cursor-pointer border-b border-transparent transition-colors data-[selected]:border-grayscale-black",
      className
    )}
  />
)
