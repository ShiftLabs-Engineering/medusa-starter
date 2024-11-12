"use client"

// External components
import * as React from "react"

// Components
import { Button, ButtonProps } from "@/components/Button"
import {
  Dialog,
  DialogProps,
  DialogTrigger,
  DialogTriggerProps,
  OverlayTriggerStateContext,
} from "react-aria-components"

export const UiDialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...rest
}) => <DialogTrigger {...rest}>{children}</DialogTrigger>

export const UiDialog: React.FC<DialogProps> = ({ children, ...rest }) => (
  <Dialog {...rest}>{children}</Dialog>
)

export const UiCloseButton: React.FC<ButtonProps> = (props) => {
  const { close } = React.useContext(OverlayTriggerStateContext)!

  return <Button {...props} onPress={close} />
}
