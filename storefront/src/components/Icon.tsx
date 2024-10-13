// External packages
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"

// Components
import * as Icons from "./icons"

export type IconNames =
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "calendar"
  | "case"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "close"
  | "credit-card"
  | "heart"
  | "info"
  | "loader"
  | "map-pin"
  | "menu"
  | "minus"
  | "package"
  | "plus"
  | "receipt"
  | "search"
  | "sliders"
  | "trash"
  | "truck"
  | "undo"
  | "user"

const baseClasses = "w-4 h-auto flex-shrink-0"

export type IconProps = React.ComponentPropsWithoutRef<"svg"> & {
  name: IconNames
  status?: number
  wrapperClassName?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  status = 0,
  wrapperClassName,
  className,
  ...rest
}) => (
  <div className={twMerge("relative shrink-0", wrapperClassName)}>
    {Boolean(status) && (
      <div
        className={twJoin(
          "absolute -right-1 -top-0.5 leading-none rounded-full flex items-center justify-center w-4 h-4 bg-black text-white text-[0.625rem]",
          status > 99 && "text-[0.5rem]"
        )}
      >
        <span className="relative top-px">{status > 99 ? "+99" : status}</span>
      </div>
    )}
    {name === "arrow-left" && (
      <Icons.ArrowLeft {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrow-right" && (
      <Icons.ArrowRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrow-up-right" && (
      <Icons.ArrowUpRight
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "calendar" && (
      <Icons.Calendar {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "case" && (
      <Icons.Case {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "check" && (
      <Icons.Check {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron-down" && (
      <Icons.ChevronDown
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "chevron-left" && (
      <Icons.ChevronLeft
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "chevron-right" && (
      <Icons.ChevronRight
        {...rest}
        className={twMerge(baseClasses, className)}
      />
    )}
    {name === "chevron-up" && (
      <Icons.ChevronUp {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "close" && (
      <Icons.Close {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "credit-card" && (
      <Icons.CreditCard {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "heart" && (
      <Icons.Heart {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "info" && (
      <Icons.Info {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "loader" && (
      <Icons.Loader {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "map-pin" && (
      <Icons.MapPin {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "menu" && (
      <Icons.Menu {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "minus" && (
      <Icons.Minus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "package" && (
      <Icons.Package {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "plus" && (
      <Icons.Plus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "receipt" && (
      <Icons.Receipt {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "search" && (
      <Icons.Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "sliders" && (
      <Icons.Sliders {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "trash" && (
      <Icons.Trash {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "truck" && (
      <Icons.Truck {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "undo" && (
      <Icons.Undo {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "user" && (
      <Icons.User {...rest} className={twMerge(baseClasses, className)} />
    )}
  </div>
)
