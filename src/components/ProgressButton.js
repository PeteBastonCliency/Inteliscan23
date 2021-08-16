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
import React, { useState } from "react"

export default function ProgressButton({
  label,
  type,
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
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const onClick = () => {
    setLoading(true)
    let value = 0

    const interval = setInterval(() => {
      value = Math.min(value + Math.random() * 0.1, 1)
      setProgress(value)

      if (value === 1) {
        setProgress(0)
        clearInterval(interval)
        setLoading(false)
      }
    }, 200)
  }

  return (
    <LaddaButton
      loading={loading}
      progress={progress}
      onClick={() => onClick()}
      style={style}
      className={`btn btn-${variant ? variant : "primary"} ${
        size ? "btn-" + size : ""
      } ${className ? className : ""}`}
    >
      {label}
    </LaddaButton>
  )
}
