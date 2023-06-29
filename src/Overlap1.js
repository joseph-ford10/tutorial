import React from 'react'
import Layout from './Layout'
import { overlap1Data as o1Data } from './Data'

const Overlap1 = () => {
  const examples = (
    <div className="examples1">
      <p>{o1Data.examples[0]}</p> <p>{o1Data.examples[1]}</p>{' '}
      <p>{o1Data.examples[2]}</p>
    </div>
  )

  return (
    <Layout
      title={o1Data.title}
      explanation={o1Data.explanation}
      examples={examples}
      exerciseIntro={o1Data.exerciseIntro}
      exerciseText={o1Data.exerciseText}
      correctAnswer={o1Data.correctAnswer}
      correctAnswerFull={o1Data.correctAnswerFull}
      nextPage="/overlap2"
      editLine={o1Data.editLine}
    />
  )
}

export default Overlap1
