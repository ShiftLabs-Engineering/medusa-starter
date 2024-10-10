"use client"

// External packages
import * as React from "react"
import * as ReactAria from "react-aria-components"

// Components
import { Select } from "./"

interface ColorPickerOwnProps {
  className?: string
}

type ColorPickerProps = ReactAria.RadioGroupProps & ColorPickerOwnProps

export const ColorPicker: React.FC<ColorPickerProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <p className="mb-4">
        Materials
        <span className="text-grayscale-500 ml-6">Lumea</span>
      </p>
      <Select
        className="w-61 mb-6"
        name="color"
        value="velvet"
        onValueChange={() => console.log()}
        options={{
          velvet: "Velvet",
          linen: "Linen",
          boucle: "Boucle",
          leather: "Leather",
        }}
      />
      <p className="mb-4">
        Colors
        <span className="text-grayscale-500 ml-6">Dark Gray</span>
      </p>
      <ReactAria.RadioGroup {...rest} aria-label="color" className="flex gap-6">
        {["#A2A2A2", "#353535", "#E8E8E8"].map((color, index) => (
          <ColorPickerItem key={index} value={color} />
        ))}
      </ReactAria.RadioGroup>
    </div>
  )
}

export const ColorPickerItem: React.FC<
  React.ComponentPropsWithoutRef<"label"> & ReactAria.RadioProps
> = ({ value, ...rest }) => (
  <ReactAria.Radio
    {...rest}
    value={value}
    aria-label={value}
    className="h-8 w-8 cursor-pointer relative before:transition-colors before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-px data-[selected]:before:bg-black"
    style={{ background: value }}
  />
)
