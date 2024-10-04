"use client"

// External packages
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"
import * as Aria from "react-aria-components"

// Components
import { Icon } from "./"

export const getFormFieldClassNames = ({
  isVisuallyDisabled,
  isSuccess,
  hasError,
}: InputOwnProps): string => {
  return twJoin(
    // Base
    "block w-full rounded-xs bg-white px-6 h-14",

    // Disabled
    isVisuallyDisabled && "cursor-not-allowed opacity-50",

    // Success
    isSuccess && "border-green-500 pr-7",

    // Error
    hasError && "border-orange-800 text-orange-800"
  )
}

/**
 * Label
 */
type InputLabelOwnProps = {
  isRequired?: boolean
}

export const InputLabel: React.FC<
  React.ComponentPropsWithRef<"label"> & InputLabelOwnProps
> = ({ isRequired, children, className, ...rest }) => (
  <Aria.Label
    {...rest}
    className={twMerge("mb-1 block font-semibold", className)}
  >
    {children}
    {isRequired && <span className="ml-0.5 text-orange-700">*</span>}
  </Aria.Label>
)

/**
 * SubLabel
 */
type InputSubLabelOwnProps = {
  type: "success" | "error"
}

export const InputSubLabel: React.FC<
  React.ComponentPropsWithRef<"p"> & InputSubLabelOwnProps
> = ({ type, children, className, ...rest }) => (
  <Aria.Text
    {...rest}
    className={twMerge(
      "mt-1.5 text-2xs",
      type === "success" && "text-green-700",
      type === "error" && "text-orange-800",
      className
    )}
  >
    {children}
  </Aria.Text>
)

/**
 * Input
 */
export type InputOwnProps = {
  isVisuallyDisabled?: boolean
  isSuccess?: boolean
  hasError?: boolean
  wrapperClassName?: string
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & InputOwnProps
>(
  (
    {
      isVisuallyDisabled,
      isSuccess,
      hasError,
      wrapperClassName,
      className,
      ...rest
    },
    ref
  ) => (
    <div className={twMerge(isSuccess ? "relative" : "", wrapperClassName)}>
      <Aria.Input
        {...rest}
        ref={ref}
        className={twMerge(
          getFormFieldClassNames({ isVisuallyDisabled, isSuccess, hasError }),
          className
        )}
      />
      {isSuccess && (
        <Icon
          name="check"
          className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 text-green-500 w-6 h-auto"
        />
      )}
    </div>
  )
)

Input.displayName = "Input"
