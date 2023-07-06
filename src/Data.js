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
  correctAnswer: `02 JEN: [I know]`,
  correctAnswerFull: `02 JEN: [I know]`,
  editLine: 1,
  complete: false,
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
  exerciseIntro: `Square brackets have been added to Dan's line, indicating exactly where he and Jen spoke at the same time. 
   However, Jen's overlap still isn't in the right place. Use your spacebar to nudge it into position.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. [I just] can't believe that`,
    `02 JEN: [I know]`,
  ],
  correctAnswer: `02 JEN:                       [I know]`,
  correctAnswerFull: `02JEN:[Iknow]`,
  editLine: 1,
  complete: false,
}

const overlap3Data = {
  title: `Overlap 3: Whitespace`,
  explanation: `Even when two utterances overlap in a recording, that doesn’t mean that they will occupy 
  the same amount of space when transcribed. It’s often the case that one set of square brackets is longer on the 
  page than the other, especially when we start adding in transcription notation. The solution is to add some 
  whitespace within the shorter pair of brackets to expand it out. There are no hard and fast rules about where and 
  how the white space should be added. As long as it’s readable, it should be fine.`,
  examples: [
    `JON: It was [just     so     great.] It really was.`,
    `DEB:        [That sounds wonderful.]`,
  ],
  exerciseIntro: `The first square bracket below has been positioned correctly, but the second one is off. 
  Add some whitespace in whatever style you like and make the brackets line up. Just remember: keep it readable.`,
  exerciseText: [
    `01 JEN: I've never [seen anything] like it in my life.`,
    `02 DAN:            [Oh wow.]`,
  ],
  correctAnswer: `02 DAN:            [   Oh wow.   ]`,
  correctAnswerFull: `02DAN:[Ohwow.]`,
  editLine: 1,
  complete: false,
}

const overlap4Data = {
  title: `Overlaps 4: Connecting Lines`,
  explanation: `The rule is that overlapping talk should be positioned one line below overlapped talk. However, 
  what if the overlapped speaker carried on talking for a while after the overlap ended—long enough to 
  require another line? In this situation, we put the rest of the overlapped speaker’s talk on the line below 
  the overlap. We then ‘connect’ the end of one line and the beginning of the next using the equals sign.`,
  examples: [
    `BOB: I went down and [had a] look around but=`,
    `DEB:                 [Okay.]`,
    `BOB: =I couldn't find it.`,
  ],
  exerciseIntro: `Dan has carried on speaking after Jen’s overlap. We’ve transcribed the talk on the line below, 
  but we haven’t connected it up yet. Add the appropriate symbol to the transcript.`,
  exerciseText: [
    `01 DAN: It's just ridiculous. [I just] can't believe that=`,
    `02 JEN:                       [I know]`,
    `03 DAN: they would close it down.`,
  ],
  correctAnswer: `03 DAN: =they would close it down.`,
  correctAnswerFull: `03 DAN: =they would close it down.`,
  editLine: 2,
  complete: false,
}

const overlap5Data = {
  title: `Overlaps 5: Taking the Floor`,
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
  correctAnswer: `04 JEN:                   [   I agr]ee. It's terrible.`,
  correctAnswerFull: `04JEN:[Iagr]ee.It'sterrible.`,
  editLine: 3,
  complete: false,
}

const overlap6Data = {
  title: `Overlaps 6: Final Challenges`,
  challenge1Heading: `Challenge One`,
  challenge1Intro: `Add a single overlap to the transcript below. The overlap should come from Dan at line 2 and be 
  overlapping with some of Jen’s talk at line 1. You can put the overlap wherever you like and have it say whatever you want. 
  However, the opening and closing brackets must be lined up correctly and Dan's overlap 
  must be at least five characters long (not counting spaces). You can add spaces to Jen's line, but 
  do not modify what she says.`,
  challenge1Text: {
    1: `01 JEN: But that's just the way it is I guess. There's=`,
    2: `02 DAN:`,
    3: `03 JEN: =not much I can do about it.`,
  },
  fullString1: `01JEN:Butthat'sjustthewayitisIguess.There's=03JEN:=notmuchIcandoaboutit.`,
  challenge2Intro: 'There is a problem with the transcript below. Fix it.',
  challenge2Text: {
    1: `01 DAN: Ever been to Germany? I [went for the] first time`,
    2: `02 JEN:                         [No I've not.]`,
    3: `03 DAN: last year.`,
  },
  challenge2Answer: [
    `01 DAN: Ever been to Germany? I [went for the] first time=`,
    `03 DAN: =last year.`,
  ],
}

export { overlap1Data }
export { overlap2Data }
export { overlap3Data }
export { overlap4Data }
export { overlap5Data }
export { overlap6Data }
