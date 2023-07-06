import { useState } from 'react'
import '../styles/formstyles.css'
function Form() {

  const [name,setName] = useState('')
  const [cat,setCat] = useState('')
  const [breed,setBreed] = useState('')
  const [date,setDate] = useState('')
  const [age,setAge] = useState(null)
  const [vac,setVac] = useState(false)
  const [history,setHistory] = useState('')

  const createListing = async(e)=>{
    e.preventDefault()
    const responseObject = {
        name,
        cat,
        breed,
        date,
        age,
        vac,
        history
    }
    const response = await fetch('http://localhost:5000/addlisting',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(responseObject),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className='container'>
    <div className='div1'>
    <h1 className='text-7xl font-black text-primaryBrown my-8'>Give Someone a New Life &#128062;</h1>
    </div>
    <div className = 'div2'>
    <form className="form" onSubmit={createListing}>
    <div className="checkout-information">
       <div className="input-group">
        <label for="Category">Category *</label>
        <select class="classic" id = 'cat' name="cat" placeholder = 'Select' required onChange={(e)=>setCat(e.target.value)}>
          <option value ='' selected="true" disabled="disabled" hidden>Select</option>
          <option value = 'Cat'>Cat</option>
          <option value = 'Dog'>Dog</option>
        </select>
      </div>
      <div className="input-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter name" value = {name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="input-group">
        <label for="breed">Breed *</label>
        <input type="text" id="breed" placeholder="Enter the breed" required value = {breed} onChange={(e)=>{setBreed(e.target.value)}}/>
      </div>
      <div className="horizontal-grid">
        <div className="input-group">
          <label for="date">Birth date</label>
          <input type="text" id="date" placeholder="12/27" value = {date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className="input-group">
          <label for="age">Age in Years</label>
          <input type="number" id="age" placeholder="XX" value = {age} onChange={(e)=>setAge(Number(e.target.value))}/>
        </div>
      </div>
      <div className="input-group">
        <label for="vac">Vaccinated *</label>
        {/* <input list="vac" name="vac" required onChange={(e)=>setVac(e.target.value==='Yes'? true : false)}/> */}
        <select class="classic" id = 'vac' name="vac" required onChange={(e)=>setVac(e.target.value==='Yes'? true : false)}>
          <option value ='' selected="true" disabled="disabled" hidden>Select</option>
          <option value = 'No'>No</option>
          <option value = 'Yes'>Yes</option>
        </select>
      </div>      
      <div className="input-group">
        <label for="history">Medical History</label>
        <textarea id="history" placeholder="Any particular diseases" value = {history} onChange={(e)=>setHistory(e.target.value)}/>
      </div>
    </div>
    <button type = 'Submit' className="button button--checkout">Create Listing</button>
  </form>
  </div>
  </div>
  )
}

export default Form