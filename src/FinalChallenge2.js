import React from 'react'
import FinalExercise from './FinalExercise'
import { overlap6Data as o6Data } from './Data'

const FinalChallenge2 = () => {
  const challenge2Check = (text) => {
    console.log(o6Data.challenge2Answer[0])
    console.log(text[1])
    console.log(o6Data.challenge2Answer[1])
    console.log(text[3])

    if (
      o6Data.challenge2Answer[0] === text[1] &&
      o6Data.challenge2Answer[1] === text[3].trimEnd()
    ) {
      return 'complete'
    } else {
      return `That's not quite right. If you're stuck, you might want to check Overlaps 4.`
    }
  }

  return (
    <>
      <section>
        <h2 className="heading">Challenge Two</h2>
        <p>{o6Data.challenge2Intro}</p>
        <FinalExercise
          check={challenge2Check}
          transcriptText={o6Data.challenge2Text}
          answer={o6Data.challenge2Answer}
        />
      </section>
    </>
  )
}

export default FinalChallenge2
