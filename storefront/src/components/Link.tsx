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
      "border-b border-current pb-0.5 md:pb-1",
    variant === "hover:underline" &&
      "border-transparent hover:border-current transition-colors"
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
