import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import AdoptPage from './pages/AdoptPage'
import Login from './pages/Login'
import Register from './pages/Register'
import PetListing from './components/PetListing'
import Fade from 'react-reveal/Fade'
import './index.css'
import 'flowbite'
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element ={<Home />} />   
            <Route path = '/adopt' element={<AdoptPage />} />
            <Route path = '/login' element={<Login />} />
            <Route path = '/register' element={<Register />} />
           <Route path = '/listing' element ={<Fade top distance="10%" duration="1500"><PetListing /></Fade>} />
        </Routes>
    </Router>
  )
}

export default App