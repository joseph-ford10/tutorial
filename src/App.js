import Overlap1 from './Overlap1'
import Overlap2 from './Overlap2'
import Overlap3 from './Overlap3'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="overlap1" element={<Overlap1 />} />
          <Route path="overlap2" element={<Overlap2 />} />
          <Route path="overlap3" element={<Overlap3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
