import React from 'react'
import FinalChallenge1 from './FinalChallenge1'
import FinalChallenge2 from './FinalChallenge2'
import NavList from './NavList'

const Overlap6 = () => {
  return (
    <>
      <NavList unitNum={6} />
      <main>
        <h1 className="heading">Overlaps 6: Final Challenges</h1>
        <FinalChallenge1 />
        <FinalChallenge2 />
      </main>
    </>
  )
}

export default Overlap6
