import React from 'react'
import { useState } from 'react'

const EditLine = ({ lineText, input, setInput }) => {
  function handleChange(e) {
    setInput(e.target.value)
    console.log(input)
  }

  return (
    <>
      <input
        className="transcriptLine"
        type="text"
        value={input}
        onChange={handleChange}
        autoFocus
        maxLength="59"
      ></input>
    </>
  )
}

export default EditLine
