import styles from '../styles/loginstyle.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  localStorage.removeItem('token')
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/login',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    if(data.user){
      alert('Login Successful!')
      localStorage.setItem('token',data.user)
      navigate('/adopt')
    }else if(data.status==='passerror'){
       alert('Wrong Password Try Again')
    }else{
       alert('You need to register first.')
       navigate('/register')
    }
    console.log(data)
  }
  return (
    <div className={styles.full1}>
    <div className={styles.centeredform}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>Login</p>
      <p className={styles.message}>Sign In to Enter your pesonalised world.</p>

      <label>
        <input required placeholder="" 
        type="email" className={styles.input} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" 
        type="password" className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <span>Password</span>
      </label>

      <button type="submit" className={styles.submit} >
        Log In
      </button>

      <p className={styles.signin}>
        Don't have an Account? <Link to='/register'>Signup now</Link>
      </p>
    </form>
    </div>
    </div>
  );
}