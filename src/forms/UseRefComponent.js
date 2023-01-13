import React, { useRef } from 'react'

const UseRefComponent = () => {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return <>
    <p style={{marginBottom: 0}}>focus</p>
    <input ref={inputRef} type="text" />
    <button onClick={handleClick}>Focus it!</button>
  </>
}

export default UseRefComponent
