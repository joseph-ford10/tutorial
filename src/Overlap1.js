import React from 'react'
import Exercise from './Exercise'

const Overlap1 = () => {
  const exerciseText = [
    `01 DAN: It's just ridiculous. I just can't believe that`,
    `02 JEN: I know`,
  ]
  const correctAnswer = `[I know]`

  return (
    <main>
      <h1>Overlaps 1</h1>
      <p>
        The Jefferson system allows us to transcribe when two (or more) people
        are speaking at the same time. When transcribing overlaps, we wrap the
        overlapping talk in square brackets. Here are some examples
      </p>
      <div className="examples">
        DEB: [Oh no.] BOB: [That's great] JON: [I see]
      </div>
      <p>
        In the example below, Jen (at line 2) is speaking in overlap with Dan
        (at line 1). However, there's nothing to indicate this. Wrap Jen's "I
        know" in square brackets and press "Check Answer".
      </p>
      <Exercise text={exerciseText} correctAnswer={correctAnswer} />
    </main>
  )
}

export default Overlap1
