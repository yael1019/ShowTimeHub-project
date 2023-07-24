import React, { useState } from 'react'
import './CreateAccount.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
            <p className='exit' onClick={() => navigate('/login')}><FiArrowLeft/></p>
            <h2 className='create-h2'>Sign Up</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <input className='login-input' type='text' name='first_name' placeholder='   First Name' value={form.first_name} onChange={handleChange} />
                <input className='login-input' type='text' name='last_name' placeholder='   Last Name' value={form.last_name} onChange={handleChange}/>
                <input className='login-input' type='email' name='email' placeholder='   Email' value={form.email} onChange={handleChange}/>
                <input className='login-input' type='password' name='password' placeholder='   Password' value={form.password} onChange={handleChange}/>
                <motion.input 
                whileHover={{scaleY: 1.1}}
                whileTap={{backgroundColor: 'black', scale: 0.9}}
                className='login-loginbtn' type='submit' value='Create Account' />
            </form>
        </div>
    </div>
  )
}

export default CreateAccount