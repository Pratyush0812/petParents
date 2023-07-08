import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdoptPage from './pages/AdoptPage'
import Login from './pages/Login'
import Register from './pages/Register'
import './index.css'
import 'flowbite'
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element = {<Home />} />   
            <Route path = '/adopt' element={<AdoptPage />} />
            <Route path = '/login' element={<Login />} />
            <Route path = '/register' element={<Register />} />
        </Routes>
    </Router>
  )
}

export default App