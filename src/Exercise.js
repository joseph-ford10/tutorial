import React from 'react'
import Line from './Line'
import EditLine from './EditLine'
import { useState } from 'react'

const Exercise = ({
  text,
  correctAnswer,
  correctAnswerFull,
  wrongAnswer,
  setWrongAnswer,
  setComplete,
  setHowComplete,
  complete,
  editLine,
}) => {
  const [input, setInput] = useState(text[editLine])

  const handleClickSubmit = (e) => {
    e.preventDefault()
    if (input.trimEnd() === correctAnswerFull) {
      setComplete(true)
      setWrongAnswer(false)
      setHowComplete('solved')
    } else {
      setWrongAnswer(true)
    }
  }

  const handleClickReveal = (e) => {
    e.preventDefault()
    setInput(correctAnswerFull)
    setWrongAnswer(false)
    setComplete(true)
    setHowComplete('revealed')
  }

  const handleClickRestart = (e) => {
    e.preventDefault()
    setInput(text[1])
    setComplete(false)
  }

  if (complete === false) {
    return (
      <>
        <form>
          {text.map((text, index) =>
            index === editLine ? (
              <EditLine
                lineText={text}
                correctAnswer={correctAnswer}
                input={input}
                setInput={setInput}
              />
            ) : (
              <Line lineText={text}></Line>
            )
          )}
          <div className="buttons">
            <button className="submitAnswer button" onClick={handleClickSubmit}>
              Check Answer
            </button>
            {wrongAnswer === true ? (
              <button
                className="revealAnswer button"
                onClick={handleClickReveal}
              >
                Reveal Answer
              </button>
            ) : (
              ''
            )}
            <button className="restart button" onClick={handleClickRestart}>
              Restart
            </button>
          </div>
        </form>
      </>
    )
  } else {
    return (
      <>
        <Line lineText={text[0]} />
        <Line lineText={input} />
        <div className="buttons">
          <button className="restart button" onClick={handleClickRestart}>
            Restart
          </button>
        </div>
      </>
    )
  }
}

export default Exercise
