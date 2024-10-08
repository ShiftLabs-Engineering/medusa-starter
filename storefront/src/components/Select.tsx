"use client"

// External packages
import * as React from "react"
import { twMerge } from "tailwind-merge"
import * as SelectPrimitive from "@radix-ui/react-select"
import { SetRequired } from "type-fest"

// Components
import { Icon } from "./"
import { InputOwnProps, getFormFieldClassNames } from "./Forms"

export const Select: React.FC<
  Omit<
    SetRequired<SelectPrimitive.SelectProps, "value" | "onValueChange">,
    "children"
  > &
    InputOwnProps & {
      className?: string
      options: Record<string, React.ReactNode>
      contentProps?: SelectPrimitive.SelectContentProps
    }
> = ({
  hasError,
  isVisuallyDisabled,
  className,
  options,
  value,
  onValueChange,
  contentProps,
  ...rest
}) => (
  <SelectPrimitive.Root {...rest} value={value} onValueChange={onValueChange}>
    <SelectPrimitive.Trigger
      type="button"
      className={twMerge(
        getFormFieldClassNames({ isVisuallyDisabled, hasError }),
        "relative inline-flex w-auto items-center gap-2 rounded-xs border h-10 border-grayscale-200 pr-12 text-start outline-none [&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap",
        className
      )}
    >
      <SelectPrimitive.Value aria-label={value}>
        {options[value]}
      </SelectPrimitive.Value>
      <SelectPrimitive.Icon asChild>
        <Icon
          name="chevron-down"
          className="h-6 w-6 text-grayscale-500"
          wrapperClassName="absolute right-4"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal
      container={
        typeof document !== "undefined"
          ? document.getElementById("select-portal-root")
          : undefined
      }
    >
      <SelectPrimitive.Content
        {...contentProps}
        position="popper"
        sideOffset={8}
        className="rounded-xs border max-h-[var(--radix-select-content-available-height)] w-61 border-grayscale-200 bg-white"
      >
        <SelectPrimitive.ScrollUpButton className="flex items-center gap-1 border-b border-grayscale-200 px-3 py-1 text-xs font-medium">
          <Icon name="chevron-up" className="inline-block" />
          <span>Scroll up</span>
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport>
          {Object.keys(options).map(
            (key, index) =>
              index > 0 && (
                <SelectItem key={key} value={key}>
                  {options[key]}
                </SelectItem>
              )
          )}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center gap-1 border-b border-grayscale-200 px-3 py-1 text-xs font-medium">
          <Icon name="chevron-down" className="inline-block" />
          <span>Scroll down</span>
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
)

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ className, children, ...rest }, ref) => (
  <SelectPrimitive.Item
    {...rest}
    className={twMerge(
      "h-14 w-auto flex items-center transition-colors hover:bg-grayscale-50 !outline-none data-[state=checked]:font-semibold cursor-pointer hover:font-semibold px-4 hover:outline-none",
      rest.disabled &&
        "cursor-not-allowed opacity-50 hover:bg-white hover:text-current",
      className
    )}
    ref={ref}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = "SelectItem"
