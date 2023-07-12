import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Login({ handleLogin }) {
    const [form, setForm] = useState({
      'email': '',
      'password': ''
    })
    const navigate = useNavigate()

    function handleChange(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
    function handleSubmit(e) {
      e.preventDefault()
      handleLogin(form)
      setForm({
        'email': '',
        'password': ''
      })
    }

    function handleClick() {
      navigate('/create')
    }
    
  return (
    <div className='login-background'>
      <div className='login-black'>
        <h1 className='login-h1'>ShowTimeHub</h1>
        <p className='login-p'>Unlimited movies, TV shows, and more</p>
        <p className='login-p-line2'>Watch anywhere, anytime</p>
        <h2 className='login-h2'>Ready to watch? LogIn</h2>
          <form className='login-form' onSubmit={ handleSubmit }>
            <input className='login-input' type='text' placeholder='   Email' name='email' value={ form.email } onChange={ handleChange }/>
            <input className='login-input' type='password' placeholder='   Password' name='password' value={ form.password } onChange={ handleChange }/>
            <motion.input 
            whileHover={{scaleY: 1.1}}
            whileTap={{backgroundColor: 'black', scale: 0.9}}
            className='login-loginbtn' type="submit" value='Login'/>
          </form>
        <button className='login-btn' onClick={() => handleClick()}>Create Account</button>
      </div>
    </div>
  )
}

export default Login