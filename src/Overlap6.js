import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
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

  const [allComplete, setAllComplete] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    console.log(complete)
    if (
      complete[1] === true &&
      complete[2] === true &&
      complete[3] === true &&
      complete[4] === true
    ) {
      setAllComplete(true)
      setModalVisible(true)
    }
  }, [complete])

  const whenCompleted = (
    <div>
      <p>
        Congratulations, you've completed the module on overlaps! Feel free to
        revisit units and exercises, or try a different module.
      </p>
    </div>
  )

  return (
    <>
      <ReactModal className="modal" isOpen={modalVisible}>
        <h2 className="heading">Congratulations!</h2>
        <p>
          You've completed the module on overlaps. Feel free to revisit the
          material and have another go at the challenges. You might also want to
          try some of the other modules.
        </p>
        <button
          onClick={() => {
            setModalVisible(false)
          }}
          className="button"
        >
          Close
        </button>
      </ReactModal>
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
