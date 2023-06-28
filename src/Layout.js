import React from 'react'
import Exercise from './Exercise'
import CompletedText from './CompletedText'
import WrongAnswer from './WrongAnswer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NextPageButton from './NextPageButton'

const Layout = ({
  title,
  explanation,
  examples,
  exerciseIntro,
  exerciseText,
  correctAnswer,
  correctAnswerFull,
  nextPage,
}) => {
  const navigate = useNavigate()
  const [complete, setComplete] = useState(false)
  const [howComplete, setHowComplete] = useState('')
  const [wrongAnswer, setWrongAnswer] = useState(false)

  return (
    <div className="wrapper">
      <main>
        <h1>{title}</h1>
        <p>{explanation}</p>
        <div className="examples">
          <p>{examples[0]}</p> <p>{examples[1]}</p> <p>{examples[2]}</p>
        </div>
        <h2>Exercise</h2>
        <p>{exerciseIntro}</p>
        <Exercise
          text={exerciseText}
          correctAnswer={correctAnswer}
          correctAnswerFull={correctAnswerFull}
          setWrongAnswer={setWrongAnswer}
          setComplete={setComplete}
          setHowComplete={setHowComplete}
        />
        {wrongAnswer === true ? <WrongAnswer /> : ''}
        {complete === true ? <CompletedText howComplete={howComplete} /> : ''}
        {complete === true ? <NextPageButton nextPage={nextPage} /> : ''}
      </main>
    </div>
  )
}

export default Layout
