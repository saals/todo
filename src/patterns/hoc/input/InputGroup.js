import React from 'react';
import './input.css'

const InputGroup = (props) => {
  return (
    <>
      <input onChange={props.onChange} type="text" name="firstname" />
      <input onChange={props.onChange} type="text" name="lastname" />
      <input onChange={props.onChange} type="text" name="email" />
      <button onClick={props.onClick}>Click</button>
    </>
  )
}

export default InputGroup;
