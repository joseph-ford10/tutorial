import React from 'react'
import FinalExercise from './FinalExercise'
import { overlap6Data as o6Data } from './Data'

const FinalChallenge4 = ({ complete, setComplete }) => {
  const challenge4Check = (text) => {
    if (
      o6Data.challenge4Answer[0] === text[1] &&
      o6Data.challenge4Answer[1] === text[2].trimEnd() &&
      o6Data.challenge4Answer[2] === text[3]
    ) {
      return 'complete'
    } else {
      return `That's not quite right. If you're stuck, you might want to check the previous units.`
    }
  }

  return (
    <>
      <section>
        <h2 className="heading">Challenge Four</h2>
        <p>{o6Data.challenge4Intro}</p>
        <FinalExercise
          check={challenge4Check}
          transcriptText={o6Data.challenge4Text}
          answer={o6Data.challenge4Answer}
          challNum={4}
          complete={complete}
          setComplete={setComplete}
        />
      </section>
    </>
  )
}

export default FinalChallenge4
