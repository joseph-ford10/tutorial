import Overlap from './Overlap'
import Overlap1 from './Overlap1'
import Overlap2 from './Overlap2'
import Overlap3 from './Overlap3'
import Overlap4 from './Overlap4'
import TopNav from './TopNav'
import TestComponent from './TestComponent'
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [complete1, setComplete1] = useState(false)
  const [complete2, setComplete2] = useState(false)
  const [complete3, setComplete3] = useState(false)
  const [complete4, setComplete4] = useState(false)

  return (
    <div className="App">
      <TopNav></TopNav>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="overlap1" element={<Overlap1 />} />
            <Route path="overlap2" element={<Overlap2 />} />
            <Route path="overlap3" element={<Overlap3 />} />
            <Route path="overlap4" element={<Overlap4 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
