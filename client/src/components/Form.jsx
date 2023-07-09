import { useState } from 'react'
import styles from '../styles/formsyles.module.css'
function Form() {

  const [name,setName] = useState('')
  const [cat,setCat] = useState('')
  const [breed,setBreed] = useState('')
  const [date,setDate] = useState('')
  const [age,setAge] = useState(0)
  const [vac,setVac] = useState(false)
  const [history,setHistory] = useState('')
  const [images,setImages] = useState([])

  
  const createListing = async(e)=>{
    e.preventDefault()
    const form = new FormData()
    form.append('name',name)
    form.append('cat',cat)
    form.append('breed',breed)
    form.append('date',date)
    form.append('age',age)
    form.append('vac',vac)
    form.append('history',history)
    for(let i=0;i<images.length;i++){
      form.append('images',images[i])
    }
    const response = await fetch('http://localhost:5000/addlisting',{
      method : 'POST',
      body : form
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className={styles.container}>
    <div className={styles.div1}>
    <h1 className='text-7xl font-black text-primaryBrown my-8 ml-6'>Give Someone a New Life &#128062;</h1>
    </div>
    <div className = {styles.div2}>
    <form className={styles.form} onSubmit={createListing}>
    <div className={styles.checkoutinformation}>
       <div className={styles.inputgroup}>
        <label for="Category">Category *</label>
        <select class="classic" id = 'cat' name="cat" placeholder = 'Select' required onChange={(e)=>setCat(e.target.value)}>
          <option value ='' selected="true" disabled="disabled" hidden>Select</option>
          <option value = 'Cat'>Cat</option>
          <option value = 'Dog'>Dog</option>
        </select>
      </div>
      <div className={styles.inputgroup}>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter name" value = {name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className={styles.inputgroup}>
        <label for="breed">Breed *</label>
        <input type="text" id="breed" placeholder="Enter the breed" required value = {breed} onChange={(e)=>{setBreed(e.target.value)}}/>
      </div>
      <div className={styles.horizontalgrid}>
        <div className={styles.inputgroup}>
          <label for="date">Birth date</label>
          <input type="text" id="date" placeholder="12/27" value = {date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className={styles.inputgroup}>
          <label for="age">Age in Years</label>
          <input type="number" id="age" placeholder="XX" value = {age} onChange={(e)=>setAge(Number(e.target.value))}/>
        </div>
      </div>
      <div className={styles.inputgroup}>
        <label for="vac">Vaccinated *</label>
        {/* <input list="vac" name="vac" required onChange={(e)=>setVac(e.target.value==='Yes'? true : false)}/> */}
        <select class="classic" id = 'vac' name="vac" required onChange={(e)=>setVac(e.target.value==='Yes'? true : false)}>
          <option value ='' selected="true" disabled="disabled" hidden>Select</option>
          <option value = 'No'>No</option>
          <option value = 'Yes'>Yes</option>
        </select>
      </div>      
      <div className={styles.inputgroup}>
        <label for="history">Medical History</label>
        <textarea id="history" placeholder="Any particular diseases" value = {history} onChange={(e)=>setHistory(e.target.value)}/>
      </div>
      <div className={styles.inputgroup}>
        <label for="images">Images</label>
        <input id="images" placeholder="" type = 'file' multiple= "multiple" onChange={(e)=>setImages(e.target.files)} accept = 'image/*'/>
      </div>
    </div>
    <button type = 'Submit' className={`${styles.button} ${styles.buttoncheckout}`}>Create Listing</button>
  </form>
  </div>
  </div>
  )
}

export default Form