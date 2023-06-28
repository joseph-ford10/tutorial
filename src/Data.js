const overlap1Data = {
  title: 'Overlaps 1: Square Brackets',
  explanation: `The Jefferson system allows us to transcribe when two (or more) people
  are speaking at the same time. When transcribing overlaps, we wrap the
  overlapping talk in square brackets. The first bracket marks the point
  where the overlap starts; the second bracket marks the point where the
  overlap ends.`,
  examples: [`DEB: [Oh no.]`, `BOB: [That's great.]`, `JON: [I see.]`],
  exerciseIntro: `In the example below, Jen (at line 2) is speaking in overlap with Dan
  (at line 1). However, there's nothing to indicate this yet. Start by wrapping Jen's "I
  know" in square brackets.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. I just can't believe that`,
    `02 JEN: I know`,
  ],
  correctAnswer: `[I know]`,
  correctAnswerFull: `02 JEN: [I know]`,
}

export { overlap1Data }
