import React from 'react'
import Line from './Line'
import EditLine from './EditLine'
import { useState } from 'react'

const Exercise = ({ text, correctAnswer }) => {
  const handleClick = (e) => {
    e.preventDefault()
    input.includes(correctAnswer) ? alert('Well done') : alert('Not quite')
  }
  const [input, setInput] = useState(text[1])

  return (
    <form>
      <Line lineText={text[0]} />
      <EditLine
        lineText={text[1]}
        correctAnswer={correctAnswer}
        input={input}
        setInput={setInput}
        placeholder="Wrap Jen's utterance in square brackets"
      />
      <button className="submitAnswer" onClick={handleClick}>
        Check Answer
      </button>
    </form>
  )
}

export default Exercise
