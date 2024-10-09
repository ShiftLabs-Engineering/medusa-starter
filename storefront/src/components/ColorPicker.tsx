"use client"

// External packages
import * as React from "react"
import * as ReactAria from "react-aria-components"

// Components
import { Drawer } from "./"

interface ColorPickerOwnProps {
  name: string
  materials: {
    name: string
    colors: {
      name: string
      hex: string
    }[]
  }[]
  className?: string
}

type ColorPickerProps = ReactAria.RadioGroupProps & ColorPickerOwnProps

export const ColorPicker: React.FC<ColorPickerProps> = ({
  materials,
  className,
  ...rest
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  return (
    <div className={className}>
      <p className="mb-4">
        Materials
        <span className="text-grayscale-500 ml-4">Lumea</span>
      </p>
      <button
        className="h-8 w-8 cursor-pointer bg-black"
        onClick={() => setDrawerOpen(true)}
      />
      <Drawer
        isOpened={drawerOpen}
        onBackdropClick={() => setDrawerOpen(false)}
        onCloseClick={() => setDrawerOpen(false)}
      >
        <p className="text-md mb-10">Materials</p>
        {materials.map((each, index) => (
          <ColorPickerGroup {...rest} key={index} material={each} />
        ))}
      </Drawer>
    </div>
  )
}

interface ColorPickerGroupOwnProps {
  material: {
    name: string
    colors: {
      name: string
      hex: string
    }[]
  }
}

type ColorPickerGroupProps = ColorPickerGroupOwnProps

export const ColorPickerGroup: React.FC<ColorPickerGroupProps> = ({
  material,
  ...rest
}) => (
  <div className="mb-10">
    <p className="mb-4">{material.name}</p>
    <ReactAria.RadioGroup {...rest} aria-label="color" className="flex gap-4">
      {material.colors.map((color, index) => (
        <ColorPickerGroupItem key={index} value={color.hex} />
      ))}
    </ReactAria.RadioGroup>
  </div>
)

export const ColorPickerGroupItem: React.FC<
  React.ComponentPropsWithoutRef<"label"> & ReactAria.RadioProps
> = ({ value, ...rest }) => (
  <ReactAria.Radio
    {...rest}
    value={value}
    aria-label={value}
    className="h-8 w-8 cursor-pointer"
    style={{ background: value }}
  />
)
