import React from "react"
import dynamic from "next/dynamic"
import "tui-calendar/dist/tui-calendar.css"
// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css"
import "tui-time-picker/dist/tui-time-picker.css"
export default function index(props) {
  const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
    ssr: false,
  })
  return <Calendar {...props} />
}
