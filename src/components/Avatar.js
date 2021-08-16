import React from "react"
import Image from "./CustomImage"
export default function Avatar({
  className,
  size,
  image,
  alt,
  border,
  priority,
}) {
  let pxSize
  switch (size) {
    case "xxl":
      pxSize = border ? 144 : 160
      break
    case "xl":
      pxSize = border ? 96 : 112
      break
    case "lg":
      pxSize = border ? 72 : 80
      break
    case "sm":
      pxSize = border ? 32 : 40
      break
    case "xs":
      pxSize = border ? 21 : 28
      break
    default:
      pxSize = border ? 40 : 48
  }

  return (
    <div
      className={`avatar ${size ? `avatar-${size}` : ""}  ${
        className ? className : ""
      }`}
    >
      <div className="position-relative overflow-hidden rounded-circle h-100 d-flex align-items-center justify-content-center">
        <Image
          src={image}
          layout="fixed"
          className="rounded-circle"
          width={pxSize}
          height={pxSize}
          alt={alt}
          priority={priority}
        />
      </div>
    </div>
  )
}
