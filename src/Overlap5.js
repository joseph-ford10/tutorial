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

  return (
    <>
      <NavList unitNum={4} />
      <Layout
        title={o5Data.title}
        explanation={o5Data.explanation}
        examples={examples}
        exerciseIntro={o5Data.exerciseIntro}
        exerciseText={o5Data.exerciseText}
        correctAnswerFull={o5Data.correctAnswerFull}
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
