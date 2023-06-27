import React from 'react'
import Exercise from './Exercise'

const Overlap1 = () => {
  const exerciseText = [`02 JEN: That's right`]
  const correctAnswer = `02 JEN: [That's right]`

  return (
    <main>
      <h1>Overlaps 1</h1>
      <p>
        The Jefferson system allows us to transcribe when two (or more) people
        are speaking at the same time. When transcribing overlaps, we wrap the
        overlapping talk in square brackets. Here are some examples
      </p>
      <div className="examples">[oh no!] [that's great] [I see]</div>
      <p>
        In the example below, Jen's utterance is supposed to be in overlap.
        However, it's missing the square brackets. Add them and press "Submit".
      </p>
      <Exercise text={exerciseText} correctAnswer={correctAnswer} />
    </main>
  )
}

export default Overlap1
