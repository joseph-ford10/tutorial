import React from 'react'

const Line = ({ lineText }) => {
  return (
    <>
      <input
        className="transcriptLine readOnlyLine"
        type="text"
        value={lineText}
        readOnly
      ></input>
    </>
  )
}

export default Line
