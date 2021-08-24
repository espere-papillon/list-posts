import React from 'react';
import {useState} from "react";

export const Counter = () => {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }

  const onChangeInput = event => {
    setText(event.target.value)
  }

  return (
    <div>
      <div>{text}</div>
      <input type="text" onChange={onChangeInput} value={text}/>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}