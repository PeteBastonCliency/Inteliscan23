import React, { useState } from "react"
import LaddaButton, {
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  ZOOM_IN,
  ZOOM_OUT,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
} from "@zumper/react-ladda"
import "ladda/dist/ladda-themeless.min.css"
export default function LoadingButton({
  type,
  label,
  variant,
  size,
  className,
}) {
  let style
  switch (type) {
    case "expand-right":
      style = EXPAND_RIGHT
      break
    case "expand-up":
      style = EXPAND_UP
      break
    case "expand-down":
      style = EXPAND_DOWN
      break
    case "zoom-in":
      style = ZOOM_IN
      break
    case "zoom-out":
      style = ZOOM_OUT
      break
    case "slide-left":
      style = SLIDE_LEFT
      break
    case "slide-right":
      style = SLIDE_RIGHT
      break
    case "slide-up":
      style = SLIDE_UP
      break
    case "slide-down":
      style = SLIDE_DOWN
      break
    default:
      style = EXPAND_LEFT
  }
  const [loading, setLoading] = useState(false)
  const onClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <LaddaButton
      loading={loading}
      onClick={onClick}
      style={style}
      className={`btn btn-${variant ? variant : "primary"} ${
        size ? "btn-" + size : ""
      } ${className ? className : ""} `}
    >
      {label}
    </LaddaButton>
  )
}
