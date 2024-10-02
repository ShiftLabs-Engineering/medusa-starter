// External packages
import * as React from "react"

export const Chevron: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m5.47 9.53 1.06-1.06L12 13.94l5.47-5.47 1.06 1.06L12 16.06 5.47 9.53Z"
      clipRule="evenodd"
    />
  </svg>
)
