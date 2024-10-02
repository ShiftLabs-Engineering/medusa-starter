// External packages
import * as React from "react"

export const Search: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
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
      d="M15.097 15.238a.608.608 0 1 0-.86.86l.86-.86Zm.867-4.148a5.874 5.874 0 0 1-5.874 5.874v1.215a7.09 7.09 0 0 0 7.09-7.09h-1.216Zm-5.874 5.874a5.874 5.874 0 0 1-5.875-5.874H3a7.09 7.09 0 0 0 7.09 7.09v-1.216ZM4.215 11.09a5.874 5.874 0 0 1 5.875-5.875V4A7.09 7.09 0 0 0 3 11.09h1.215Zm5.875-5.875a5.874 5.874 0 0 1 5.874 5.875h1.215A7.09 7.09 0 0 0 10.09 4v1.215ZM20 20.141l-4.903-4.903-.86.86L19.142 21l.859-.86Z"
    />
  </svg>
)
