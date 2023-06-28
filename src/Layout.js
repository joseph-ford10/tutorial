import React from 'react'
import Exercise from './Exercise'
import { useNavigate } from 'react-router-dom'

const Layout = ({
  title,
  explanation,
  examples,
  exerciseIntro,
  exerciseText,
  correctAnswer,
  nextPage,
}) => {
  const navigate = useNavigate()

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
        <Exercise text={exerciseText} correctAnswer={correctAnswer} />
        <button className="nextPage" onClick={() => navigate(`${nextPage}`)}>
          Next Page
        </button>
      </main>
    </div>
  )
}

export default Layout
