import React, { useState } from 'react'
import NavList from './NavList'

const FinalExercise = ({ check, transcriptText, answer }) => {
  const [text, setText] = useState(transcriptText)
  const [message, setMessage] = useState('Complete the challenge above.')
  const [complete, setComplete] = useState(false)
  const [color, setColor] = useState('black')
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const [readOnly, setReadOnly] = useState(false)

  const textKeys = Object.keys(text)

  const handleChange = (key, update) => {
    console.log(text)
    setText((text) => ({
      ...text,
      [key]: update,
    }))
    console.log(check(text))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (check(text) === 'complete') {
      setMessage('Well done! Onto the next one?')
      setComplete(true)
      setColor('gray')
      setReadOnly(true)
    } else {
      setMessage(check(text))
      setWrongAnswer(true)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setMessage('Complete the challenge above')
    setComplete(false)
    setColor('black')
    setText(transcriptText)
    setReadOnly(false)
    setWrongAnswer(false)
  }

  const revealAnswer = (e) => {
    e.preventDefault()
    setMessage(
      'If you need a refresher, you can go back. Otherwise--onto the next one?'
    )
    setText(answer)
    setComplete(true)
    setColor('gray')
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
              style={{ color: color }}
              maxLength="59"
              readOnly={readOnly}
            ></input>
          )
        })}
        <div className="buttons">
          {' '}
          {complete === false ? (
            <button onClick={handleSubmit}>Check Answer</button>
          ) : (
            ''
          )}
          <button onClick={handleReset}>Reset</button>
          {complete === false ? (
            wrongAnswer === true ? (
              <button onClick={revealAnswer}>Reveal Answer</button>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </div>
      </form>
      <p className="messageArea">{message}</p>
    </>
  )
}

export default FinalExercise
