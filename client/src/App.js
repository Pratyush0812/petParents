import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdoptPage from './pages/AdoptPage'
import './index.css'
import 'flowbite'
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element = {<Home />} />   
            <Route path = '/adopt' element={<AdoptPage />} />
        </Routes>
    </Router>
  )
}

export default App