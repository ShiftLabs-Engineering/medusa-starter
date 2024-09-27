// External packages
import * as React from "react";

export const Check: React.FC<React.ComponentPropsWithoutRef<"svg">> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M16.667 5 7.5 14.167 3.333 10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
