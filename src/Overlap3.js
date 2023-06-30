import React from 'react'
import { overlap3Data as o3Data } from './Data'
import Layout from './Layout'

const Overlap3 = () => {
  const examples = (
    <div className="examples3">
      <p className="example3Line1">{o3Data.examples[0]}</p>
      <p className="example3Line2">{o3Data.examples[1]}</p>
      <p className="examples3Line3">{o3Data.examples[2]}</p>
    </div>
  )

  return (
    <Layout
      title={o3Data.title}
      explanation={o3Data.explanation}
      examples={examples}
      exerciseIntro={o3Data.exerciseIntro}
      exerciseText={o3Data.exerciseText}
      correctAnswerFull={o3Data.correctAnswerFull}
      editLine={o3Data.editLine}
      nextPage="/overlap4"
    />
  )
}

export default Overlap3
