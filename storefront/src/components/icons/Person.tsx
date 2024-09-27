// External packages
import * as React from "react"

export const Person: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M20 21a8 8 0 0 0-16 0"
    />
  </svg>
)
