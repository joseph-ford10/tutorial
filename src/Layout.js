import React from 'react'
import Exercise from './Exercise'
import CompletedText from './CompletedText'
import WrongAnswer from './WrongAnswer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NextPageButton from './NextPageButton'
import { useEffect } from 'react'
import NavList from './NavList'
import ResourceList from './ResourceList'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({
  title,
  explanation,
  examples,
  exerciseIntro,
  exerciseText,
  correctAnswer,
  exerciseCheck,
  nextPage,
  editLine,
  complete,
  setComplete,
  unitNum,
}) => {
  const navigate = useNavigate()
  const [howComplete, setHowComplete] = useState('')
  const [wrongAnswer, setWrongAnswer] = useState(false)

  return (
    <>
      <main>
        <h1 className="heading">{title}</h1>
        <p>{explanation}</p>
        {examples}
        <div className="exerciseWrapper">
          <h2 className="heading">Exercise</h2>
          <p>{exerciseIntro}</p>
          <Exercise
            text={exerciseText}
            correctAnswer={correctAnswer}
            exerciseCheck={exerciseCheck}
            wrongAnswer={wrongAnswer}
            setWrongAnswer={setWrongAnswer}
            complete={complete}
            setComplete={setComplete}
            setHowComplete={setHowComplete}
            editLine={editLine}
            unitNum={unitNum}
          />
        </div>
        {wrongAnswer === true ? <WrongAnswer /> : ''}
        {complete === true ? <CompletedText howComplete={howComplete} /> : ''}
        {complete === true ? <NextPageButton nextPage={nextPage} /> : ''}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
