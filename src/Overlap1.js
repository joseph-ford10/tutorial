import React from 'react'
import Layout from './Layout'
import { overlap1Data as o1Data } from './Data'

const Overlap1 = () => {
  return (
    <Layout
      title={o1Data.title}
      explanation={o1Data.explanation}
      examples={o1Data.examples}
      exerciseIntro={o1Data.exerciseIntro}
      exerciseText={o1Data.exerciseText}
      correctAnswer={o1Data.correctAnswer}
      correctAnswerFull={o1Data.correctAnswerFull}
      nextPage="/overlap2"
    />
  )
}

export default Overlap1
