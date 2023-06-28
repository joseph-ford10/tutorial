import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextPageButton = ({ nextPage }) => {
  const navigate = useNavigate()

  return (
    <button className="nextPage" onClick={() => navigate(`${nextPage}`)}>
      Next Page
    </button>
  )
}

export default NextPageButton
