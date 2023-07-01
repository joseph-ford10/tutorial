import React, { useState } from 'react'
import NavList from './NavList'
import Overlap1 from './Overlap1'
import Overlap2 from './Overlap2'
import Overlap3 from './Overlap3'
import Overlap4 from './Overlap4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Overlap = () => {
  const [complete1, setComplete1] = useState(false)
  const [complete2, setComplete2] = useState(false)
  const [complete3, setComplete3] = useState(false)
  const [complete4, setComplete4] = useState(false)

  return <div className="wrapper"></div>
}

export default Overlap
