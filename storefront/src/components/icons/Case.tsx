// External packages
import * as React from "react"

export const Case: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path stroke="currentColor" d="M4.5 7.5h15v12h-15z" />
    <path stroke="currentColor" d="M9 8s0-4 3-4 3 4 3 4" />
  </svg>
)
