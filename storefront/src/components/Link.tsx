// External packages
import * as React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { twJoin, twMerge } from "tailwind-merge"

type LinkOwnProps = {
  variant?: "base" | "underline" | "hover:underline" | "unstyled"
}

const getLinkClassNames = ({ variant }: LinkOwnProps): string =>
  twJoin(
    "transition-colors",
    variant === "base" && "text-blue-500",
    (variant === "underline" || variant === "hover:underline") &&
      "bg-gradient-to-r from-current to-current text-current bg-[length:100%0.0625rem] bg-[0%_100%] bg-no-repeat",
    variant === "hover:underline" &&
      "bg-[length:0%0.0625rem] hover:bg-[length:100%0.0625rem] transition-[background-size]"
  )

export const Link = <RouteInferType extends any>({
  variant = "base",
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> &
  NextLinkProps<RouteInferType> &
  LinkOwnProps) => (
  <NextLink
    {...rest}
    className={twMerge(getLinkClassNames({ variant }), className)}
  >
    {children}
  </NextLink>
)

export const Anchor: React.FC<
  React.ComponentPropsWithoutRef<"a"> & LinkOwnProps
> = ({ variant = "base", className, children, ...rest }) => (
  <a {...rest} className={twMerge(getLinkClassNames({ variant }), className)}>
    {children}
  </a>
)
