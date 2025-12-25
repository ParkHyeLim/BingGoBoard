import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Bingo from './pages/Bingo/Bingo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/bingo" element={<Bingo />} /> */}
      </Routes>
    </>
  )
}

export default App