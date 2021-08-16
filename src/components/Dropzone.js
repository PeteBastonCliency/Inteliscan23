import React, { useEffect, useRef, useState } from "react"

export default function Dropzone({ className }) {
  const dropzoneRef = useRef(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(async () => {
    // we make a dynamic import for the Dropzone, as this component is not made to work on SSR
    const Dropzone = (await import("dropzone")).default
    setLoaded(true)
    Dropzone.autoDiscover = false

    !loaded &&
      new Dropzone(dropzoneRef.current, {
        url: "/",
        thumbnailWidth: 120,
        thumbnailHeight: 120,
      })
  }, [])
  return (
    <div ref={dropzoneRef} className={`dropzone ${className ? className : ""}`}>
      <div className="dz-message">
        <p>Drop files here or click to upload.</p>
        <p>
          <span className="note">
            (This is just a demo dropzone. Selected files are{" "}
            <strong>not</strong> actually uploaded.)
          </span>
        </p>
      </div>
    </div>
  )
}
