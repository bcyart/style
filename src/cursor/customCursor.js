import React, { useEffect, useRef } from "react"
//Context
import { useGlobalStateContext } from "./globalContext"
// Styled Components
import { Cursor } from "../components/styledcomponents" 

const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext()
  const cursor = useRef(null);

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
        ref = {cursor}
      />
    </>
  )
}

export default CustomCursor
