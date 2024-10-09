"use client"

// External packages
import * as ReactAria from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface SizePickerGroupOwnProps {
  name: string
  data: string[]
}

type SizePickerGroupProps = React.ComponentPropsWithoutRef<"div"> &
  ReactAria.RadioGroupProps &
  SizePickerGroupOwnProps

export const SizePickerGroup: React.FC<SizePickerGroupProps> = ({
  name,
  data,
  className,
  ...rest
}) => (
  <div>
    <p className="mb-4">
      Size
      <span className="text-grayscale-500 ml-4">{/* {selected} */}Name</span>
    </p>
    <ReactAria.RadioGroup
      {...rest}
      aria-label="size"
      className={twMerge("flex gap-16", className)}
    >
      {data.map((size, index) => (
        <SizePickerGroupItem key={index} value={size} />
      ))}
    </ReactAria.RadioGroup>
  </div>
)
export const SizePickerGroupItem: React.FC<
  React.ComponentPropsWithoutRef<"label"> & ReactAria.RadioProps
> = ({ value, className, ...rest }) => (
  <ReactAria.Radio
    {...rest}
    value={value}
    className={twMerge(
      "cursor-pointer text-black border-b border-transparent transition-colors data-[selected]:border-grayscale-800",
      className
    )}
  >
    {value}
  </ReactAria.Radio>
)
