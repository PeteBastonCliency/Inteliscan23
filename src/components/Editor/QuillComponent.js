import React, { useEffect, useRef, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.bubble.css"
import "quill/dist/quill.snow.css"
export default function QuillComponent({ text, withEditor, className }) {
  const editorContainerRef = useRef(false)
  const toolbarContainerRef = useRef(false)
  useEffect(() => {
    const quillFunc = new Quill(editorContainerRef.current, {
      modules: {
        toolbar: withEditor ? toolbarContainerRef.current : undefined,
      },
      placeholder: "Compose an epic...",
      theme: withEditor ? "snow" : "bubble", // Specify theme in configuration
    })
    quillFunc.root.style.maxHeight = "1000px"
    quillFunc.root.style.minHeight = "300px"
  }, [])
  return (
    <div>
      {withEditor && (
        <div ref={toolbarContainerRef}>
          <span className="ql-formats">
            <select className="ql-font"></select>
            <select className="ql-size"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-header" value="1"></button>
            <button className="ql-header" value="2"></button>
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-direction" value="rtl"></button>
            <select className="ql-align"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-link"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-clean"></button>
          </span>
        </div>
      )}
      <div
        className={`bg-white ${className ? className : ""}`}
        ref={editorContainerRef}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}
