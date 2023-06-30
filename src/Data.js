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
  editLine: 1,
}

const overlap2Data = {
  title: 'Overlaps 2: Positioning',
  explanation: `In real transcripts, you should never see talk on just one line wrapped in square brackets. 
  Just as we mark the talk of the 'overlapper' with square brackets, we do the same to the talk of the 'overlapped'.
   The square brackets on each line should then be positioned on top of/below each other. This is one of the reasons
   why transcripts are typically done using fixed-width fonts like Courier (or Courier New).`,
  examples: [
    `DEB: It's not today. [It's next week.] Sorry.`,
    `JON:                 [Oh right.      ]`,
  ],
  exerciseIntro: `Square brackets have been added to Dan's line, indicating exactly where Jen spoke at the same time. 
   However, Jen's overlap still isn't in the right place. Use your spacebar to nudge it into position.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. [I just] can't believe that`,
    `02 JEN: [I know]`,
  ],
  correctAnswerFull: `02 JEN:                       [I know]`,
  editLine: 1,
}

const overlap3Data = {
  title: `Overlaps 3: Connecting Lines`,
  explanation: `The rule is that overlapping talk should be positioned one line below overlapped talk. However, 
  what if the overlapped speaker carried on talking for a while after the overlap ended—long enough to 
  require another line? In this situation, we put the rest of the overlapped speaker’s talk on the line below 
  the overlap. We then ‘connect’ the end of one line and the beginning of the next using the equals sign.`,
  examples: [
    `BOB: I went down to the office and [had a] look around but I=`,
    `DEB:                               [Okay.]`,
    `BOB: =couldn't find it.`,
  ],
  exerciseIntro: `Dan has carried on speaking after Jen’s overlap. We’ve transcribed the talk on the line below, 
  but we haven’t connected it up yet. Add the appropriate symbol to the transcript.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. [I just] can't believe that=`,
    `02 JEN:                       [I know]`,
    `03 DAN: they would close the arcade down.`,
  ],
  correctAnswerFull: `03 DAN: =they would close the arcade down.`,
  editLine: 2,
}

const overlap4Data = {
  title: `Overlaps 4: Taking the Floor`,
  explanation: `In the examples we have seen so far, the overlaps have been brief, starting and finishing while the 
  original speaker is still talking. This is not always the case. Sometimes, an overlapped speaker will stop and an 
  overlapping speaker will continue, effectively ‘taking the floor’. When this happens, we carry on transcribing the 
  overlapping speaker’s talk after the closing square bracket as normal.`,
  examples: [
    `BOB: It looks like the weat[her's not-]`,
    `JON:                       [  I saw th]at. That's`,
    `     why I want to try and get it done today.`,
  ],
  exerciseIntro: `Jen has come in to take the floor from Dan at line 4. The closing bracket has been added on Jen’s line, 
  but you’ll need to add the starting bracket and get the positioning right.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. [I just] can't believe that=`,
    `02 JEN:                       [I know]`,
    `03 DAN: =they would close [it down.]`,
    `04 JEN:                   I agr]ee. It's terrible.`,
  ],
  correctAnswerFull: `04 JEN:                   [   I agr]ee. It's terrible.`,
  editLine: 3,
}

export { overlap1Data }
export { overlap2Data }
export { overlap3Data }
export { overlap4Data }
