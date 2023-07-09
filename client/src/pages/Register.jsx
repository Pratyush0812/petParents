import styles from '../styles/loginstyle.module.css'
import { Link } from 'react-router-dom'
import '../index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate = useNavigate()
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [password,setPassword] = useState('')


  const handleSubmit =  async (e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/register',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        firstname,
        lastname,
        email,
        contact,
        password,
      })
    })
    const data = await response.json()
    if(data.status==='ok'){
      alert('You have registered successfully and can login now')
      navigate('/login')
    }else{
      alert('You are already registered. Please login')
      navigate('/login')
    }
    console.log(data)

  }
  return (
    <div className={styles.full1}>
    <div class={styles.centeredform}>
    <form className={styles.form} onSubmit= {handleSubmit}>
      <p className={styles.title}>Register</p>
      <p className={styles.message}>Signup now and get full 
      access to our app.</p>
      <div className={styles.flex}>
        <label>
          <input required placeholder="" 
          type="text" className={styles.input} value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder="" 
          type="text" className={styles.input} value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" 
        type="email" className={styles.input} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" 
        type="tel" className={styles.input} value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
        <span>Contact no.</span>
      </label>

      <label>
        <input required placeholder="" 
        type="password" className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <span>password</span>
      </label>

      <button type="submit" className={styles.submit} >
        Submit
      </button>

      <p className={styles.signin}>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </form>
    </div>
    </div>
  );
}