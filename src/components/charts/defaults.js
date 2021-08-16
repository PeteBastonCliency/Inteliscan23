import React, { useEffect, useRef, useState } from "react"

export const colors = {
  primary: "#4650dd",
  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  pinkLighter: "#e685b5",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#35b653",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#fff",
}
// let canvasContext = document.createElement("canvas").getContext("2d")
// let whiteBlue = canvasContext.createLinearGradient(0, 0, 300, 300)
// whiteBlue.addColorStop(0, "rgba(255,255,255, 0.8)")
// whiteBlue.addColorStop(1, "rgba(70,80,221, 0.8)")

// let pinkBlue = canvasContext.createLinearGradient(140, 0, 150, 300.0)
// pinkBlue.addColorStop(0, "rgba(63,94,251,.85)")
// pinkBlue.addColorStop(1, "rgba(252,70,107, .85)")

// let primaryWhite = canvasContext.createLinearGradient(0, 0, 0, 200)
// primaryWhite.addColorStop(0, colors.primary)
// primaryWhite.addColorStop(1, colors.white)

// export const gradients = {
//   whiteBlue: whiteBlue,
//   pinkBlue: pinkBlue,
//   primaryWhite: primaryWhite,
// }

// let lala
// function lalal() {
//   let canvasContext = document.createElement("canvas").getContext("2d")
//   let whiteBlue = canvasContext.createLinearGradient(0, 0, 300, 300)
//   whiteBlue.addColorStop(0, "rgba(255,255,255, 0.8)")
//   whiteBlue.addColorStop(1, "rgba(70,80,221, 0.8)")
//   lala = whiteBlue
// }
// lalal()
// let pinkBlue = canvasContext.createLinearGradient(140, 0, 150, 300.0)
// pinkBlue.addColorStop(0, "rgba(63,94,251,.85)")
// pinkBlue.addColorStop(1, "rgba(252,70,107, .85)")

// let primaryWhite = canvasContext.createLinearGradient(0, 0, 0, 200)
// primaryWhite.addColorStop(0, colors.primary)
// primaryWhite.addColorStop(1, colors.white)

// export const gradients = {
//   whiteBlue: lala,
//   // pinkBlue: pinkBlue,
//   // primaryWhite: primaryWhite,
// }

export const gradients = (chartRef) => {
  const gradients = {}
  if (chartRef.current) {
    var context = chartRef.current.getContext("2d")

    gradients.whiteBlue = context.createLinearGradient(0, 0, 300, 300)
    gradients.whiteBlue.addColorStop(0, "rgba(255,255,255, 0.8)")
    gradients.whiteBlue.addColorStop(1, "rgba(70,80,221, 0.8)")

    gradients.pinkBlue = context.createLinearGradient(140, 0, 150, 300.0)
    gradients.pinkBlue.addColorStop(0, "rgba(63,94,251,.85)")
    gradients.pinkBlue.addColorStop(1, "rgba(252,70,107, .85)")

    gradients.primaryWhite = context.createLinearGradient(0, 0, 0, 200)
    gradients.primaryWhite.addColorStop(0, colors.primary)
    gradients.primaryWhite.addColorStop(1, colors.white)
  }

  return gradients
}
