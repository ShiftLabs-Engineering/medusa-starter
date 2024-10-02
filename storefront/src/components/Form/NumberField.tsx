"use client"

// External packages
import { useController, ControllerRenderProps } from "react-hook-form"

// Components
import {
  InputLabel,
  InputSubLabel,
  NumberInputGroup,
  NumberInputButton,
  NumberInput,
} from "../"

export interface NumberFieldProps {
  className?: string
  name: string
  label?: string
  labelProps?: Omit<
    React.ComponentProps<typeof InputLabel>,
    "htmlFor" | "isRequired"
  >
  fieldProps?: Omit<
    React.ComponentProps<typeof NumberInputGroup>,
    "name" | "id" | keyof ControllerRenderProps
  >
  isRequired?: boolean
}

export const NumberField: React.FC<NumberFieldProps> = ({
  className,
  name,
  label,
  labelProps,
  fieldProps,
  isRequired,
}) => {
  const { field, fieldState } = useController<{ __name__: number }, "__name__">(
    { name: name as "__name__" }
  )

  return (
    <div className={className}>
      {typeof label !== "undefined" && (
        <InputLabel {...labelProps} htmlFor={name} isRequired={isRequired}>
          {label}
        </InputLabel>
      )}
      <NumberInputGroup
        {...fieldProps}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={field.name}
        isRequired={isRequired}
      >
        <NumberInputButton iconName="minus" slot="decrement" />
        <NumberInput />
        <NumberInputButton iconName="plus" slot="increment" />
      </NumberInputGroup>
      {fieldState.error && (
        <InputSubLabel type="error">{fieldState.error.message}</InputSubLabel>
      )}
    </div>
  )
}
