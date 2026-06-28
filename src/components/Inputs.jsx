import React from 'react'
import { useState } from 'react'

const Inputs = () => {
    const [form, setForm] = useState({
        name:"",
        surname:"",
        email:"",
        agreed:false,
    })
    const [list, setList] = useState([])
    function handeleChange(e) {
        const {name, value} =e.target
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefult()
        setList({name:"", surname:"", email:"", agreed:false })
    }

     return (
    <div>
        <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="">Ism kriting:</label>
        <input className='border' type="text" name='name' value={form.name} onChange={handeleChange} />
        <label htmlFor="">Familiya kriting:</label>
        <input className='border' type="text" name='surname' value={form.surname} onChange={handeleChange} />
        <label htmlFor="">Email kriting:</label>
        <input className='border' type="text" name='email' value={form.email} onChange={handeleChange} />
        <label htmlFor="">Rozimisis:</label>
        <input className='border' type="checkbox" name='agreed' checked={form.agreed} onChange={handeleChange} />
        <button type="submit">Yuborish</button>
        </form>
    </div>
      )
}

export default Inputs