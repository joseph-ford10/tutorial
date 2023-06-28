import React from 'react'
import Exercise from './Exercise'

const Overlap1 = () => {
  const exerciseText = [
    `01 DAN: It's just ridiculous. I just can't believe that`,
    `02 JEN: I know`,
  ]
  const correctAnswer = `[I know]`

  return (
    <div className="wrapper">
      <main>
        <h1>Overlaps 1</h1>
        <p>
          The Jefferson system allows us to transcribe when two (or more) people
          are speaking at the same time. When transcribing overlaps, we wrap the
          overlapping talk in square brackets. The first bracket marks the point
          where the overlap starts. The second bracket marks the point where the
          overlap ends.
        </p>
        <div className="examples">
          <p>DEB: [Oh no.]</p> <p>BOB: [That's great]</p> <p>JON: [I see]</p>
        </div>
        <p>
          In the example below, Jen (at line 2) is speaking in overlap with Dan
          (at line 1). However, there's nothing to indicate this. Wrap Jen's "I
          know" in square brackets and press "Check Answer".
        </p>
        <Exercise text={exerciseText} correctAnswer={correctAnswer} />
      </main>
    </div>
  )
}

export default Overlap1
