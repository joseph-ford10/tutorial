import React, { useState } from 'react'
import { useLayoutEffect } from 'react'

const FinalExercise = ({
  check,
  transcriptText,
  answer,
  complete,
  setComplete,
  challNum,
}) => {
  const [text, setText] = useState(transcriptText)
  const [message, setMessage] = useState('Complete the challenge above.')
  const [color, setColor] = useState('black')
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [howComplete, setHowComplete] = useState('')

  const textKeys = Object.keys(text)

  useLayoutEffect(() => {
    const completion = localStorage.getItem(`overlapChall${challNum}`)
    if (completion === `complete`) {
      setComplete((complete) => ({
        ...complete,
        [challNum]: true,
      }))
      const answer = localStorage.getItem(`overlapChall${challNum}Ans`)
      const answer2 = JSON.parse(answer)
      setText(answer2)
      localStorage.getItem(`overlapChall${challNum}How`) === 'solved'
        ? setMessage('Well done! Onto the next one?')
        : setMessage(
            'If you need a refresher, you can go back. Otherwise--onto the next one?'
          )
      setColor('gray')
    } else {
      setComplete((complete) => ({
        ...complete,
        [challNum]: false,
      }))
    }
  }, [setText, challNum, setComplete, setHowComplete])

  const handleChange = (key, update) => {
    setText((text) => ({
      ...text,
      [key]: update,
    }))
    console.log(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (check(text) === 'complete') {
      setMessage('Well done! Onto the next one?')
      setComplete((complete) => ({
        ...complete,
        [challNum]: true,
      }))
      setColor('gray')
      setReadOnly(true)
      setHowComplete('completed')
      localStorage.setItem(`overlapChall${challNum}`, `complete`)
      localStorage.setItem(`overlapChall${challNum}Ans`, JSON.stringify(text))
      localStorage.setItem(`overlapChall${challNum}How`, 'solved')
    } else {
      setMessage(check(text))
      setWrongAnswer(true)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setMessage('Complete the challenge above')
    setComplete((complete) => ({
      ...complete,
      [challNum]: false,
    }))
    setColor('black')
    setText(transcriptText)
    setReadOnly(false)
    setWrongAnswer(false)
    localStorage.removeItem(`overlapChall${challNum}`)
    localStorage.removeItem(`overlapChall${challNum}Ans`)
    localStorage.removeItem(`overlapChall${challNum}How`)
  }

  const revealAnswer = (e) => {
    e.preventDefault()
    setMessage(
      'If you need a refresher, you can go back. Otherwise--onto the next one?'
    )
    setText(answer)
    setComplete((complete) => ({
      ...complete,
      [challNum]: true,
    }))
    setHowComplete('revealed')
    setColor('gray')
    localStorage.setItem(`overlapChall${challNum}`, `complete`)
    localStorage.setItem(`overlapChall${challNum}Ans`, JSON.stringify(answer))
    localStorage.setItem(`overlapChall${challNum}How`, 'revealed')
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
          {complete[challNum] === false ? (
            <button onClick={handleSubmit}>Check Answer</button>
          ) : (
            ''
          )}
          <button onClick={handleReset}>Reset</button>
          {complete[challNum] === false ? (
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
