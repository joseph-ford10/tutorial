import React from 'react'

const CompletedText = ({ howComplete }) => {
  if (howComplete === 'solved') {
    return (
      <p className="completedText">
        Nicely done! Click the button below to go to the next page or click
        'Reset' to have another go at this one.
      </p>
    )
  } else if (howComplete === 'revealed') {
    return (
      <p className="completedText">
        If you need a refresher, reread the tutorial above or check out one of
        the resources in the sidebar. When you feel ready, head to the next
        page!
      </p>
    )
  }
}

export default CompletedText
