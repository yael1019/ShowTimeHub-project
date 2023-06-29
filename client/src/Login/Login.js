import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <form onSubmit={ handleSubmit }>
        <input type='text' placeholder='email' name='email' value={ form.email } onChange={ handleChange }/>
        <input type='password' placeholder='password' name='password' value={ form.password } onChange={ handleChange }/>
        <input type="submit" value='Login'/>
      </form>
      <button onClick={() => handleClick()}>Create Account</button>
    </div>
  )
}

export default Login