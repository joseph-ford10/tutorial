import Overlap1 from './Overlap1'
import { overlap1Data as o1Data } from './Data'

import Overlap2 from './Overlap2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="overlap1" element={<Overlap1 />} />
          <Route path="overlap2" element={<Overlap2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
