// External packages
import * as React from "react"
import { twMerge } from "tailwind-merge"

// Components
import * as Icons from "./icons"

export type IconNames =
  | "arrow-left"
  | "arrow-right"
  | "case"
  | "check"
  | "chevron"
  | "loader"
  | "minus"
  | "person"
  | "plus"
  | "search"
  | "sliders"
  | "star"

const baseClasses = "w-4 h-auto flex-shrink-0"

export const Icon: React.FC<
  React.ComponentPropsWithoutRef<"svg"> & {
    name: IconNames
  }
> = ({ name, className, ...rest }) => (
  <>
    {name === "arrow-left" && (
      <Icons.ArrowLeft {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrow-right" && (
      <Icons.ArrowRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "case" && (
      <Icons.Case {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "check" && (
      <Icons.Check {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron" && (
      <Icons.Chevron {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "loader" && (
      <Icons.Loader {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "minus" && (
      <Icons.Minus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "person" && (
      <Icons.Person {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "plus" && (
      <Icons.Plus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "search" && (
      <Icons.Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "sliders" && (
      <Icons.Sliders {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "star" && (
      <Icons.Star {...rest} className={twMerge(baseClasses, className)} />
    )}
  </>
)
