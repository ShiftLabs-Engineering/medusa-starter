"use client"

// External packages
import * as React from "react"
import * as AriaCheckbox from "react-aria-components"
import { twMerge } from "tailwind-merge"

// Components
import { Icon } from "."

export type CheckboxOwnProps = {
  label: React.ReactNode
  labelProps?: React.ComponentPropsWithoutRef<"p">
}
export type CheckboxProps = AriaCheckbox.CheckboxProps & CheckboxOwnProps

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelProps,
  className,
  ...rest
}) => (
  <AriaCheckbox.Checkbox
    {...rest}
    className={twMerge(
      "flex gap-2 items-start text-grayscale-500",
      className as string
    )}
  >
    <div className="h-4 w-4 mt-1 data-[data-selected]:bg-black data-[data-selected]:text-white transition-colors border border-grayscale-200 hover:border-grayscale-600 flex justify-between items-center">
      <Icon name="check" className="w-3.5" />
    </div>
    <p {...labelProps}>{label}</p>
  </AriaCheckbox.Checkbox>
)
