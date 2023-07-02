import React, { useEffect, useLayoutEffect } from 'react'
import Line from './Line'
import EditLine from './EditLine'
import { useState } from 'react'

const Exercise = ({
  text,
  correctAnswer,
  exerciseCheck,
  wrongAnswer,
  setWrongAnswer,
  setComplete,
  setHowComplete,
  complete,
  editLine,
  unitNum,
}) => {
  const [input, setInput] = useState(text[editLine])

  useLayoutEffect(() => {
    const completion = localStorage.getItem(`overlap${unitNum}`, `complete`)
    if (completion === `complete`) {
      setComplete(true)
      setInput(localStorage.getItem(`overlap${unitNum}Ans`))
      localStorage.getItem(`overlap${unitNum}How`) === 'solved'
        ? setHowComplete('solved')
        : setHowComplete('revealed')
    } else {
      setComplete(false)
    }
  }, [setInput, unitNum, setComplete, setHowComplete])

  const handleClickSubmit = (e) => {
    e.preventDefault()
    if (exerciseCheck(input)) {
      setComplete(true)
      setWrongAnswer(false)
      setHowComplete('solved')
      localStorage.setItem(`overlap${unitNum}`, `complete`)
      localStorage.setItem(`overlap${unitNum}Ans`, input)
      localStorage.setItem(`overlap${unitNum}How`, 'solved')
    } else {
      setWrongAnswer(true)
    }
  }

  const handleClickReveal = (e) => {
    e.preventDefault()
    setInput(correctAnswer)
    setWrongAnswer(false)
    setComplete(true)
    setHowComplete('revealed')
  }

  const handleClickRestart = (e) => {
    e.preventDefault()
    setInput(text[editLine])
    setComplete(false)
    localStorage.removeItem(`overlap${unitNum}`)
    localStorage.removeItem(`overlap${unitNum}Ans`)
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
        {text.map((text, index) =>
          index === editLine ? (
            <Line lineText={input} />
          ) : (
            <Line lineText={text}></Line>
          )
        )}
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
