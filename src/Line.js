import React from 'react'
import { useState } from 'react'

const Line = ({ lineText, input, setInput }) => {
  function handleChange(e) {
    setInput(e.target.value)
    console.log(input)
  }

  return <input type="text" value={input} onChange={handleChange}></input>
}

export default Line
