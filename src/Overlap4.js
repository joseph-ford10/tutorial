import React, { useState } from 'react'
import { overlap4Data as o4Data } from './Data'
import Layout from './Layout'
import NavList from './NavList'

const Overlap4 = () => {
  const [complete4, setComplete4] = useState(false)

  const examples = (
    <div className="examples4">
      <p className="example4Line1">{o4Data.examples[0]}</p>
      <p className="example4Line2">{o4Data.examples[1]}</p>
      <p className="example4Line3">{o4Data.examples[2]}</p>
    </div>
  )

  function exerciseCheck(input) {
    if (input === o4Data.correctAnswerFull) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <NavList unitNum={4} />
      <Layout
        title={o4Data.title}
        explanation={o4Data.explanation}
        examples={examples}
        exerciseIntro={o4Data.exerciseIntro}
        exerciseText={o4Data.exerciseText}
        correctAnswer={o4Data.correctAnswer}
        exerciseCheck={exerciseCheck}
        editLine={o4Data.editLine}
        nextPage="/overlap5"
        complete={complete4}
        setComplete={setComplete4}
        unitNum="4"
      />
    </>
  )
}

export default Overlap4
