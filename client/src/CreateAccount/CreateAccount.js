import React, { useState } from 'react'
import './CreateAccount.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function CreateAccount({ handleCreate }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        handleCreate(form)
        navigate('/login')
    }
  return (
    <div className='login-background'>
        <div className='login-black'>
            <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='first_name' placeholder='First Name' value={form.first_name} onChange={handleChange} />
                <input type='text' name='last_name' placeholder='Last Name' value={form.last_name} onChange={handleChange}/>
                <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange}/>
                <input type='submit' value='Create Account' />
            </form>
        </div>
    </div>
  )
}

export default CreateAccount