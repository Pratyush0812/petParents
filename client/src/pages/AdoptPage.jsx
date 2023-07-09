import Navbar from "../components/Navbar"
import Form from "../components/Form"
import Footer from "../components/Footer"
import jwt_decode from 'jwt-decode'
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function AdoptPage() {
  const navigate = useNavigate()
  const [user,setUser] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const temp = jwt_decode(token)
        setUser(temp)
        if(!temp){
            localStorage.removeItem('token')
            navigate('/login')
        }
    }else navigate('/login')
},[])
  return (
    <>
    <Navbar user = {user}/>
    <Form />
    <Footer />
    </>
  )
}

export default AdoptPage