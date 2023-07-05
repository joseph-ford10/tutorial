import React, { useState } from 'react'
import Layout from './Layout'
import { overlap2Data as o2Data } from './Data'
import NavList from './NavList'

const Overlap2 = () => {
  const [complete2, setComplete2] = useState(false)

  const examples = (
    <div className="examples2">
      <p className="example2Line1">{o2Data.examples[0]}</p>
      <p className="example2Line2">{o2Data.examples[1]}</p>
    </div>
  )

  function exerciseCheck(input) {
    if (input.charAt(30) == '[' && input.charAt(37) == ']') {
      const newInput = input.replace(/\s/g, '')
      console.log(newInput)
      console.log(o2Data.correctAnswerFull)
      if (newInput === o2Data.correctAnswerFull) {
        return true
      }
    } else {
      return false
    }
  }

  return (
    <>
      <NavList unitNum={2} complete2={complete2} />
      <Layout
        title={o2Data.title}
        explanation={o2Data.explanation}
        examples={examples}
        exerciseIntro={o2Data.exerciseIntro}
        exerciseText={o2Data.exerciseText}
        correctAnswer={o2Data.correctAnswer}
        exerciseCheck={exerciseCheck}
        nextPage="/overlap3"
        editLine={o2Data.editLine}
        complete={complete2}
        setComplete={setComplete2}
        unitNum="2"
      />
    </>
  )
}

export default Overlap2
