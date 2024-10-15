"use client"

// External packages
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"
import * as Aria from "react-aria-components"

// Components
import { Icon } from "./"

export const getFormFieldClassNames = ({
  variant,
  isVisuallyDisabled,
  isSuccess,
  hasError,
}: InputOwnProps): string => {
  return twJoin(
    // Base
    "block w-full rounded-xs transition-colors focus-within:outline-none bg-white px-6 h-14",

    // Variant
    variant === "outline" &&
      "border border-grayscale-200 hover:border-grayscale-500 focus:border-grayscale-500 bg-transparent",

    // Disabled
    isVisuallyDisabled &&
      "cursor-not-allowed bg-grayscale-50 text-grayscale-400",

    // Success
    isSuccess && "border-green-500 pr-7",

    // Error
    hasError && "border-red-primary focus:border-red-900 hover:border-red-900"
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
      "mt-2 text-xs",
      type === "success" && "text-green-700",
      type === "error" && "text-red-primary",
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
  variant?: "solid" | "outline"
  isVisuallyDisabled?: boolean
  isSuccess?: boolean
  hasError?: boolean
  errorMessage?: string
  wrapperClassName?: string
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & InputOwnProps
>(
  (
    {
      variant,
      isVisuallyDisabled,
      isSuccess,
      hasError,
      errorMessage,
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
          getFormFieldClassNames({
            variant,
            isVisuallyDisabled,
            isSuccess,
            hasError,
          }),
          className
        )}
      />
      {isSuccess && (
        <Icon
          name="check"
          className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 text-green-500 w-6 h-auto"
        />
      )}
      {hasError && errorMessage && (
        <InputSubLabel type="error">{errorMessage}</InputSubLabel>
      )}
    </div>
  )
)

Input.displayName = "Input"
