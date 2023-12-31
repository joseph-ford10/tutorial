import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { overlap1Data as o1Data } from './Data'
import NavList from './NavList'
import TopNav from './TopNav'

const Overlap1 = () => {
  const [complete1, setComplete1] = useState(false)

  function exerciseCheck(input) {
    if (o1Data.correctAnswerFull === input) {
      return true
    } else {
      return false
    }
  }

  const examples = (
    <div className="examples1">
      <p>
        {o1Data.examples[0]} | {o1Data.examples[1]} | {o1Data.examples[2]}{' '}
      </p>
    </div>
  )

  return (
    <>
      <NavList unitNum={1} complete1={complete1} />
      <Layout
        title={o1Data.title}
        explanation={o1Data.explanation}
        examples={examples}
        exerciseIntro={o1Data.exerciseIntro}
        exerciseText={o1Data.exerciseText}
        correctAnswer={o1Data.correctAnswer}
        exerciseCheck={exerciseCheck}
        nextPage="/overlap2"
        editLine={o1Data.editLine}
        complete={complete1}
        setComplete={setComplete1}
        unitNum="1"
      />
    </>
  )
}

export default Overlap1
