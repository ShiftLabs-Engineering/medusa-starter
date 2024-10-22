"use client"

import * as React from "react"
import { LinkProps } from "next/link"
import { useParams } from "next/navigation"
import { Link, LinkOwnProps } from "./Link"
import { ButtonAnchor, ButtonOwnProps } from "./Button"

export const LocalizedLink = <RouteInferType extends any>({
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> &
  LinkProps<RouteInferType> &
  LinkOwnProps) => {
  const { countryCode } = useParams()

  return (
    <Link {...props} href={`/${countryCode}${href}`}>
      {children}
    </Link>
  )
}

export const LocalizedButtonLink = <RouteInferType extends any>({
  isFullWidth,
  isVisuallyDisabled,
  iconName,
  iconPosition,
  isLoading,
  loadingText,
  size,
  spinnerPosition,
  variant,
  className,
  children,
  href,
  ...props
}: ButtonOwnProps &
  Omit<LinkProps<RouteInferType>, "passHref"> & {
    className?: string
    children?: React.ReactNode
  }) => {
  const { countryCode } = useParams()

  return (
    <Link {...props} href={`/${countryCode}${href}`} passHref>
      <ButtonAnchor
        isFullWidth={isFullWidth}
        isVisuallyDisabled={isVisuallyDisabled}
        iconName={iconName}
        iconPosition={iconPosition}
        isLoading={isLoading}
        loadingText={loadingText}
        size={size}
        spinnerPosition={spinnerPosition}
        variant={variant}
        className={className}
      >
        {children}
      </ButtonAnchor>
    </Link>
  )
}
