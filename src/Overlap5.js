import React, { useState } from 'react'
import { overlap5Data as o5Data } from './Data'
import Layout from './Layout'
import NavList from './NavList'

const Overlap5 = () => {
  const [complete5, setComplete5] = useState(false)

  const examples = (
    <div className="examples5">
      <p className="example5Line1">{o5Data.examples[0]}</p>
      <p className="example5Line2">{o5Data.examples[1]}</p>
      <p className="example5Line3">{o5Data.examples[2]}</p>
    </div>
  )

  function exerciseCheck(input) {
    if (input.charAt(26) == '[' && input.charAt(35) == ']') {
      const newInput = input.replace(/\s/g, '')
      console.log(newInput)
      console.log(o5Data.correctAnswerFull)
      if (newInput === o5Data.correctAnswerFull) {
        return true
      }
    } else {
      return false
    }
  }

  return (
    <>
      <NavList unitNum={5} />
      <Layout
        title={o5Data.title}
        explanation={o5Data.explanation}
        examples={examples}
        exerciseIntro={o5Data.exerciseIntro}
        exerciseText={o5Data.exerciseText}
        correctAnswer={o5Data.correctAnswer}
        exerciseCheck={exerciseCheck}
        editLine={o5Data.editLine}
        nextPage="/overlap6"
        complete={complete5}
        setComplete={setComplete5}
        unitNum="5"
      />
    </>
  )
}

export default Overlap5
