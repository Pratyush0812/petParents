import styles from '../styles/loginstyle.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div classname={styles.full}>
    <div className={styles.centeredform}>
    <form className={styles.form} >
      <p className={styles.title}>Login</p>
      <p className={styles.message}>Sign In to Enter your pesonalised world.</p>

      <label>
        <input required placeholder="" 
        type="email" className={styles.input} />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" 
        type="password" className={styles.input} />
        <span>Password</span>
      </label>

      <button type="submit" className={styles.submit}>
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