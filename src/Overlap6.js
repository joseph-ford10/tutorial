import React, { useState } from 'react'
import FinalChallenge1 from './FinalChallenge1'
import FinalChallenge2 from './FinalChallenge2'
import FinalChallenge3 from './FinalChallenge3'
import FinalChallenge4 from './FinalChallenge4'
import NavList from './NavList'

const Overlap6 = () => {
  const [complete, setComplete] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  })

  return (
    <>
      <NavList unitNum={6} complete={complete} />
      <main className="finalChallenges">
        <h1 className="heading">Overlaps 6: Final Challenges</h1>
        <FinalChallenge1 complete={complete} setComplete={setComplete} />
        <FinalChallenge2 complete={complete} setComplete={setComplete} />
        <FinalChallenge3 complete={complete} setComplete={setComplete} />
        <FinalChallenge4 complete={complete} setComplete={setComplete} />
      </main>
    </>
  )
}

export default Overlap6
