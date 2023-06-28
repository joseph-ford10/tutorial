import React from 'react'
import Line from './Line'
import EditLine from './EditLine'
import { useState } from 'react'

const Exercise = ({
  text,
  correctAnswer,
  correctAnswerFull,
  setWrongAnswer,
  setComplete,
  setHowComplete,
  complete,
}) => {
  const [input, setInput] = useState(text[1])

  const handleClickSubmit = (e) => {
    e.preventDefault()
    input.includes(correctAnswer) ? setComplete(true) : setWrongAnswer(true)
    setHowComplete('solved')
  }

  const handleClickReveal = (e) => {
    e.preventDefault()
    setInput(correctAnswerFull)
    setWrongAnswer(false)
    setComplete(true)
    setHowComplete('revealed')
  }

  const handleClickRestart = (e) => {
    setInput(text[1])
    setComplete(false)
  }

  if (complete === false) {
    return (
      <form>
        <Line lineText={text[0]} />
        <EditLine
          lineText={text[1]}
          correctAnswer={correctAnswer}
          input={input}
          setInput={setInput}
        />
        <button className="submitAnswer" onClick={handleClickSubmit}>
          Check Answer
        </button>
        <button className="revealAnswer" onClick={handleClickReveal}>
          Reveal Answer
        </button>
        <button className="restart" onClick={handleClickRestart}>
          Restart
        </button>
      </form>
    )
  } else {
    return (
      <>
        <Line lineText={text[0]} />
        <Line lineText={input} />
        <button className="restart" onClick={handleClickRestart}>
          Restart
        </button>
      </>
    )
  }
}

export default Exercise
