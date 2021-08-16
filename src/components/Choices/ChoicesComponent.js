import React, { useEffect, useRef } from "react"
import { Form } from "react-bootstrap"
import Choices from "choices.js"
export default function ChoicesSelect(props) {
  const inputRef = useRef(false)
  useEffect(() => {
    const textRemove = new Choices(inputRef.current, {
      delimiter: ",",
      editItems: true,
      removeItemButton: true,
    })
    return () => textRemove.destroy()
  }, [])
  return (
    <div>
      <Form.Control type="text" {...props} ref={inputRef} />
    </div>
  )
}
