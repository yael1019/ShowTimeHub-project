import React from 'react'
import './Settings.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


function Settings({ currentUser, handleLogout }) {
  const navigate = useNavigate()
  function handleWatched() {
    navigate('/watched', {state: currentUser})
  }
  return (
    <div>
        <p onClick={() => navigate('/')}><FiArrowLeft/></p>
        <h2>{ currentUser.first_name }</h2>
        <h2>{ currentUser.last_name }</h2>
        <h2>{ currentUser.email }</h2>
        <h2>password: *******</h2>
        <p onClick={handleWatched}>Watched</p>  
        <button onClick={ handleLogout }>Logout</button>
    </div>
  )
}

export default Settings