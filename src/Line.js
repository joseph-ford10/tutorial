import React from 'react'

const Line = ({ lineText }) => {
  return (
    <>
      <input
        className="transcriptLine readOnlyLine"
        type="text"
        value={lineText}
        readOnly
        maxLength="59"
      ></input>
    </>
  )
}

export default Line
