"use client"

// External packages
import * as React from "react"
import * as ReactAria from "react-aria-components"
import { twMerge } from "tailwind-merge"

// Components
import { Icon, IconNames } from "./Icon"

/**
 * NumberInput
 */
export const NumberInputGroup = React.forwardRef<
  HTMLDivElement,
  ReactAria.NumberFieldProps & { className?: string }
>(({ className, ...rest }, ref) => (
  <ReactAria.NumberField
    {...rest}
    ref={ref}
    className={twMerge(
      "flex h-10 w-35 px-4 rounded-lg justify-between border border-black",
      className
    )}
  />
))

NumberInputGroup.displayName = "NumberInputGroup"

/**
 * NumberInputButton
 */
export const NumberInputButton = React.forwardRef<
  HTMLButtonElement,
  ReactAria.ButtonProps & { className?: string; iconName: IconNames }
>(({ iconName, className, type = "button", ...rest }, ref) => (
  <ReactAria.Button
    {...rest}
    ref={ref}
    type={type}
    className={twMerge(
      "disabled:text-grayscale-30 transition-colors shrink-0",
      className
    )}
  >
    <Icon name={iconName} className="mx-auto w-6" />
  </ReactAria.Button>
))

NumberInputButton.displayName = "NumberInputButton"

/**
 * NumberInput
 */
export const NumberInput = React.forwardRef<
  HTMLInputElement,
  ReactAria.InputProps & { className?: string }
>(({ className, ...rest }, ref) => (
  <ReactAria.Input
    {...rest}
    ref={ref}
    className={twMerge(
      "border-none text-center text-sm focus-within:outline-none w-5 font-semibold leading-none",
      className
    )}
  />
))

NumberInput.displayName = "NumberInput"
