"use client"

// External packages
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"
import * as ReactAria from "react-aria-components"

// Components
import { Icon, IconNames } from "./Icon"

export type ButtonOwnProps = {
  colorScheme?: "black" | "white"
  isFullWidth?: boolean
  iconName?: IconNames
  iconPosition?: "start" | "end"
  isVisuallyDisabled?: boolean
  isLoading?: boolean
  loadingText?: string
  size?: "sm" | "md"
  spinnerPosition?: "start" | "end"
  variant?: "ghost" | "outline" | "solid" | "link" | "unstyled"
}

export const getButtonClassNames = ({
  colorScheme,
  isFullWidth,
  iconName,
  iconPosition,
  isVisuallyDisabled,
  isLoading,
  loadingText,
  size,
  spinnerPosition,
  variant,
}: ButtonOwnProps): string => {
  return twJoin(
    "inline-flex items-center focus-visible:outline-none h-10 rounded-md justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed",

    // isFullWidth
    Boolean(isFullWidth) && "w-full",

    // iconPosition
    // spinnerPosition
    (iconPosition === "end" || spinnerPosition === "end") && "flex-row-reverse",

    // Disabled
    (isVisuallyDisabled || isLoading) && "cursor-not-allowed",

    // isLoading
    // iconName
    ((Boolean(isLoading) && Boolean(loadingText)) || Boolean(iconName)) &&
      "gap-2",

    // size
    size === "sm" && "px-5 py-1",
    size === "md" && "px-6 py-2",

    // variant
    colorScheme === "black" &&
      ((variant === "ghost" && "text-grayscale-black hover:bg-grayscale-100") ||
        (variant === "outline" &&
          "text-grayscale-black hover:bg-grayscale-100 border border-grayscale-black") ||
        (variant === "solid" && "bg-grayscale-black text-grayscale-white") ||
        (variant === "link" && "text-grayscale-black hover:underline") ||
        (variant === "unstyled" && "text-grayscale-black")),

    colorScheme === "white" &&
      ((variant === "ghost" && "text-grayscale-5 hover:text-grayscale-20") ||
        (variant === "outline" &&
          "text-grayscale-5 hover:text-grayscale-30 hover:border-grayscale-50 border border-text-grayscale-5") ||
        (variant === "solid" &&
          "bg-grayscale-5 hover:bg-grayscale-30 text-grayscale-black") ||
        (variant === "link" && "text-grayscale-5 hover:underline") ||
        (variant === "unstyled" && "text-grayscale-5"))
  )
}

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonOwnProps &
  ReactAria.ButtonProps

export const Button: React.FC<ButtonProps> = ({
  colorScheme = "black",
  isFullWidth,
  iconName,
  iconPosition = "start",
  isLoading,
  loadingText,
  size = "md",
  spinnerPosition = "start",
  variant = "solid",
  type = "button",
  className,
  children,
  ...rest
}) => (
  <ReactAria.Button
    {...rest}
    type={type}
    className={twMerge(
      getButtonClassNames({
        colorScheme,
        isFullWidth,
        iconName,
        iconPosition,
        isLoading,
        loadingText,
        size,
        spinnerPosition,
        variant,
      }),
      className
    )}
  >
    {Boolean(isLoading) && <Icon name="loader" className="animate-spin" />}
    {iconName && !Boolean(isLoading) && <Icon name={iconName} />}
    {Boolean(isLoading)
      ? Boolean(loadingText)
        ? loadingText
        : null
      : children}
  </ReactAria.Button>
)
