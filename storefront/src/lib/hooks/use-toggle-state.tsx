"use client"

import { useCallback, useState } from "react"

type UseToggleStateReturn = {
  state: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useToggleState = (initialState = false): UseToggleStateReturn => {
  const [state, setState] = useState(initialState)

  const close = useCallback(() => setState(false), [])
  const open = useCallback(() => setState(true), [])
  const toggle = useCallback(() => setState((prev) => !prev), [])

  return {
    state,
    close,
    open,
    toggle,
  }
}
