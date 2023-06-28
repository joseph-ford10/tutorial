import React from 'react'
import Line from './Line'
import EditLine from './EditLine'
import { useState } from 'react'

const Exercise = ({ text, correctAnswer, correctAnswerFull }) => {
  const handleClickSubmit = (e) => {
    e.preventDefault()
    input.includes(correctAnswer) ? alert('Well done') : alert('Not quite')
  }

  const handleClickReveal = (e) => {
    e.preventDefault()
    setInput(correctAnswerFull)
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
      <button className="submitAnswer" onClick={handleClickSubmit}>
        Check Answer
      </button>
      <button className="revealAnswer" onClick={handleClickReveal}>
        Reveal Answer
      </button>
    </form>
  )
}

export default Exercise
