import React from 'react'
import FinalExercise from './FinalExercise'
import { overlap6Data as o6Data } from './Data'

const FinalChallenge1 = ({ complete, setComplete }) => {
  const challenge1Check = (text) => {
    const line1Open = text[1].indexOf('[')
    const line1Close = text[1].indexOf(']')
    const line2Open = text[2].indexOf('[')
    const line2Close = text[2].indexOf(']')

    const fullString1 = text[1]
      .concat(text[3])
      .replace('[', '')
      .replace(']', '')
      .replace(/\s/g, '')

    const fullString2 = text[2].replace(/\s/g, '')

    const correctLength = line2Close - line2Open + 3

    if (
      line1Open !== -1 &&
      line1Open === line2Open &&
      line1Close !== -1 &&
      line1Close === line2Close
    ) {
      if (fullString1 !== o6Data.fullString1) {
        return `That's not quite right. Did you change Jen's words?`
      } else {
        if (fullString2.length < 13) {
          return `That's not quite right. Is your overlap at least 8 characters long?`
        } else {
          if (
            fullString2.charAt(6) === '[' &&
            fullString2.charAt(fullString2.length - 1) === ']'
          ) {
            return 'complete'
          } else {
            return `That's not quite right. Did you edit text outside the square brackets?`
          }
        }
      }
    } else {
      return `That's not quite right. Are your square brackets lined up correctly?`
    }
  }

  return (
    <>
      <section>
        <h2 className="heading">Challenge One</h2>
        <p>{o6Data.challenge1Intro}</p>
        <FinalExercise
          check={challenge1Check}
          transcriptText={o6Data.challenge1Text}
          answer={o6Data.challenge1Answer}
          complete={complete}
          setComplete={setComplete}
          challNum="1"
        />
      </section>
    </>
  )
}

export default FinalChallenge1
