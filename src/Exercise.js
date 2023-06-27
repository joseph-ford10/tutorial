import React from 'react'
import Line from './Line'
import { useState } from 'react'

const Exercise = ({ text, correctAnswer }) => {
  const handleClick = (e) => {
    console.log(input)
    console.log(correctAnswer)
    e.preventDefault()
    input == correctAnswer ? alert('Well done!') : alert('Not quite')
  }

  const [input, setInput] = useState(text)

  return (
    <form>
      <Line
        lineText={text[0]}
        correctAnswer={correctAnswer}
        input={input}
        setInput={setInput}
      />
      <button onClick={handleClick}>Check Answer</button>
    </form>
  )
}

export default Exercise
