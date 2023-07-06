import React, { useState } from 'react'
import NavList from './NavList'

const FinalExercise = ({ check, transcriptText }) => {
  const [text, setText] = useState(transcriptText)

  const textKeys = Object.keys(text)

  const handleChange = (key, update) => {
    console.log(text)
    setText((text) => ({
      ...text,
      [key]: update,
    }))
    console.log(check(text))
  }

  return (
    <>
      <form>
        {textKeys.map((key, index) => {
          return (
            <input
              key={key}
              className={`line${key} transcriptLine`}
              onChange={(e) => handleChange(key, e.target.value)}
              value={text[key]}
              maxLength="59"
            ></input>
          )
        })}
      </form>
    </>
  )
}

export default FinalExercise
