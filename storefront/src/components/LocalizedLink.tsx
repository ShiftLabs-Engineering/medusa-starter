"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useParams } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { getLinkClassNames, LinkOwnProps } from "./Link"

export const LocalizedLink = <RouteInferType extends any>({
  children,
  href,
  variant = "unstyled",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> &
  LinkProps<RouteInferType> &
  LinkOwnProps) => {
  const { countryCode } = useParams()

  return (
    <Link
      {...props}
      href={`/${countryCode}${href}`}
      className={twMerge(getLinkClassNames({ variant }), className)}
    >
      {children}
    </Link>
  )
}
