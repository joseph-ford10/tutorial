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
  correctAnswerFull,
  nextPage,
  editLine,
}) => {
  const navigate = useNavigate()
  const [complete, setComplete] = useState(false)
  const [howComplete, setHowComplete] = useState('')
  const [wrongAnswer, setWrongAnswer] = useState(false)

  return (
    <>
      <div className="wrapper">
        <main>
          <h1>{title}</h1>
          <p>{explanation}</p>
          {examples}
          <div className="exerciseWrapper">
            <h2>Exercise</h2>
            <p>{exerciseIntro}</p>
            <Exercise
              text={exerciseText}
              correctAnswer={correctAnswer}
              correctAnswerFull={correctAnswerFull}
              wrongAnswer={wrongAnswer}
              setWrongAnswer={setWrongAnswer}
              complete={complete}
              setComplete={setComplete}
              setHowComplete={setHowComplete}
              editLine={editLine}
            />
          </div>
          {wrongAnswer === true ? <WrongAnswer /> : ''}
          {complete === true ? <CompletedText howComplete={howComplete} /> : ''}
          {complete === true ? <NextPageButton nextPage={nextPage} /> : ''}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
