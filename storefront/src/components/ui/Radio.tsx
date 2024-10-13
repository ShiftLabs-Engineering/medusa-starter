// External packages
import { Radio, RadioProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export const UiRadio: React.FC<RadioProps> = ({ className, ...props }) => (
  <Radio
    {...props}
    className={twMerge(
      "flex gap-2 group cursor-pointer items-center",
      className as string
    )}
  />
)

export const UiRadioBox: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  className,
  ...props
}) => (
  <span
    {...props}
    className={twMerge(
      "border border-grayscale-200 w-4 h-4 block rounded-full group-data-[selected]:border-black group-data-[selected]:border-6",
      className
    )}
  />
)

export const UiRadioLabel: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  className,
  ...props
}) => (
  <span
    {...props}
    className={twMerge("group-data-[selected=true]:font-semibold", className)}
  />
)
