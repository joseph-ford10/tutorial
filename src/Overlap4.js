import React from 'react'
import { overlap4Data as o4Data } from './Data'
import Layout from './Layout'

const Overlap4 = () => {
  const examples = (
    <div className="examples4">
      <p className="example4Line1">{o4Data.examples[0]}</p>
      <p className="example4Line2">{o4Data.examples[1]}</p>
      <p className="example4Line3">{o4Data.examples[2]}</p>
    </div>
  )

  return (
    <Layout
      title={o4Data.title}
      explanation={o4Data.explanation}
      examples={examples}
      exerciseIntro={o4Data.exerciseIntro}
      exerciseText={o4Data.exerciseText}
      correctAnswerFull={o4Data.correctAnswerFull}
      editLine={o4Data.editLine}
      nextPage="/overlap5"
    />
  )
}

export default Overlap4
