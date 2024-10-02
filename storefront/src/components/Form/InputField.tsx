"use client"

// External packages
import { useController, ControllerRenderProps } from "react-hook-form"
import { twMerge } from "tailwind-merge"

// Components
import { Input, InputLabel, InputSubLabel } from "../"

export interface InputFieldProps {
  className?: string
  name: string
  label?: string
  type?: React.ComponentProps<"input">["type"]
  labelProps?: Omit<
    React.ComponentProps<typeof InputLabel>,
    "htmlFor" | "isRequired"
  >
  inputProps?: Omit<
    React.ComponentProps<"input">,
    "name" | "id" | "type" | keyof ControllerRenderProps
  >
  isRequired?: boolean
  suffix?: React.ReactNode
  showSuccess?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  className,
  name,
  label,
  type,
  labelProps,
  inputProps,
  isRequired,
  suffix,
  showSuccess,
}) => {
  const { field, fieldState } = useController<{ __name__: string }, "__name__">(
    { name: name as "__name__" }
  )

  const hasError = Boolean(fieldState.error)

  const inputEl = (
    <Input
      data-1p-ignore={type !== "password"}
      data-lpignore={type !== "password"}
      data-bwignore={type !== "password"}
      {...inputProps}
      {...field}
      value={field.value ?? ""}
      id={name}
      type={type}
      className={twMerge(inputProps?.className, Boolean(suffix) && "pr-10")}
      hasError={hasError}
      isSuccess={
        showSuccess &&
        (fieldState.isTouched || fieldState.isDirty) &&
        !fieldState.invalid
      }
    />
  )

  return (
    <div className={className}>
      {typeof label !== "undefined" && (
        <InputLabel {...labelProps} htmlFor={name} isRequired={isRequired}>
          {label}
        </InputLabel>
      )}
      {typeof suffix !== "undefined" ? (
        <div className="relative">
          {inputEl}
          <div className="pointer-events-none absolute bottom-0 right-3 top-0 flex items-center">
            {suffix}
          </div>
        </div>
      ) : (
        inputEl
      )}
      {fieldState.error && (
        <InputSubLabel type="error">{fieldState.error.message}</InputSubLabel>
      )}
    </div>
  )
}
