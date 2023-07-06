import React from 'react'
import FinalExercise from './FinalExercise'
import { overlap6Data as o6Data } from './Data'

const FinalChallenge3 = ({ complete, setComplete }) => {
  const challenge3Check = (text) => {
    const line1Open = text[1].indexOf('[')
    const line1Close = text[1].indexOf(']')
    const line2Open = text[2].indexOf('[')
    const line2Close = text[2].indexOf(']')

    const fullString1 = text[1]
      .replace('[', '')
      .replace(']', '')
      .replace(/\s/g, '')

    const fullString2 = text[2].replace(/\s/g, '')

    const correctLength = line2Close - line2Open + 3

    const string1NoSpace = `01DAN:It'sreallystrangebut-`

    console.log(line2Close)

    const string2AfterClose = fullString2.substring(fullString2.indexOf(']'))

    console.log(string2AfterClose)

    if (
      line1Open !== -1 &&
      line1Open === line2Open &&
      line1Close !== -1 &&
      line1Close === text[1].length - 1 &&
      line1Close === line2Close
    ) {
      if (fullString1 !== string1NoSpace) {
        return `That's not quite right. Did you change Dan's words?`
      } else {
        if (fullString2.length < 18) {
          return `That's not quite right. Is your overlap at least 10 characters long?`
        } else {
          if (fullString2.charAt(6) !== '[') {
            return `That's not quite right. Did you add text before Jen's square bracket?`
          } else {
            if (string2AfterClose.length > 1) {
              return 'complete'
            } else {
              return `That's not quite right. Did you make sure the overlap continues after the final square bracket?`
            }
          }
        }
      }
    } else {
      return `That's not quite right. Are your square brackets in the right place?`
    }
  }

  return (
    <>
      <section>
        <h2 className="heading">Challenge Three</h2>
        <p>{o6Data.challenge3Intro}</p>
        <FinalExercise
          check={challenge3Check}
          transcriptText={o6Data.challenge3Text}
          answer={o6Data.challenge3Answer}
          complete={complete}
          setComplete={setComplete}
          challNum="3"
        />
      </section>
    </>
  )
}

export default FinalChallenge3
