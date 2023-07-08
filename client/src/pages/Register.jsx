import styles from '../styles/loginstyle.module.css'
import { Link } from 'react-router-dom'
import '../index.css'
export default function Register() {
  return (
    <div classname={styles.full}>
    <div class={styles.centeredform}>
    <form className={styles.form} >
      <p className={styles.title}>Register</p>
      <p className={styles.message}>Signup now and get full 
      access to our app.</p>
      <div className="flex">
        <label>
          <input required placeholder="" 
          type="text" className={styles.input} />
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder="" 
          type="text" className={styles.input} />
          <span>Lastname</span>
        </label>
      </div>

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

      <label>
        <input required placeholder="" 
        type="password" className={styles.input} />
        <span>Confirm password</span>
      </label>

      <button type="submit" className={styles.submit}>
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