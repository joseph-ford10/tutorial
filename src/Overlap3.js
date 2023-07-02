import React, { useState } from 'react'
import Layout from './Layout'
import { overlap3Data as o3Data } from './Data'
import NavList from './NavList'

const Overlap3 = () => {
  const [complete3, setComplete3] = useState(false)

  const examples = (
    <div className="examples3">
      <p className="example3Line1">{o3Data.examples[0]}</p>
      <p className="example3Line2">{o3Data.examples[1]}</p>
    </div>
  )

  function exerciseCheck(input) {
    console.log(input.charAt(19))
    console.log(input.charAt(33))

    if (input.charAt(19) == '[' && input.charAt(33) == ']') {
      const newInput = input.replace(/\s/g, '')
      console.log(newInput)
      console.log(o3Data.correctAnswerFull)
      if (newInput === o3Data.correctAnswerFull) {
        return true
      }
    } else {
      return false
    }
  }

  return (
    <>
      <NavList unitNum={3} />
      <Layout
        title={o3Data.title}
        explanation={o3Data.explanation}
        examples={examples}
        exerciseIntro={o3Data.exerciseIntro}
        exerciseText={o3Data.exerciseText}
        correctAnswer={o3Data.correctAnswer}
        exerciseCheck={exerciseCheck}
        nextPage="/overlap4"
        editLine={o3Data.editLine}
        complete={complete3}
        setComplete={setComplete3}
        unitNum="3"
      />
    </>
  )
}

export default Overlap3
