import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextPageButton = ({ nextPage }) => {
  const navigate = useNavigate()

  return (
    <div className="nextPageContainer">
      <button
        className="nextPage button"
        onClick={() => navigate(`${nextPage}`)}
      >
        Next Page
      </button>
    </div>
  )
}

export default NextPageButton
