import Overlap1 from './Overlap1'
import Overlap2 from './Overlap2'
import Overlap3 from './Overlap3'
import Overlap4 from './Overlap4'
import Overlap5 from './Overlap5'
import Overlap6 from './Overlap6'
import TopNav from './TopNav'
import TestComponent from './TestComponent'
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [complete, setComplete] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  })

  return (
    <div className="App">
      <TopNav></TopNav>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="test" element={<TestComponent />} />
            <Route path="overlap1" element={<Overlap1 />} />
            <Route path="overlap2" element={<Overlap2 />} />
            <Route path="overlap3" element={<Overlap3 />} />
            <Route path="overlap4" element={<Overlap4 />} />
            <Route path="overlap5" element={<Overlap5 />} />
            <Route path="overlap6" element={<Overlap6 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
