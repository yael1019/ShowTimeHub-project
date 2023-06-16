import React, { useState, useEffect } from 'react'
import './Settings.css'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import Watched from './Watched'


function Settings({ currentUser }) {
  const navigate = useNavigate()
  function handleWatched() {
    navigate('/watched', {state: currentUser})
  }
  return (
    <div>
        <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
        <h2>{ currentUser.first_name }</h2>
        <h2>{ currentUser.last_name }</h2>
        <h2>{ currentUser.email }</h2>
        <h2>password: *******</h2>
        <p onClick={handleWatched}>Watched</p>  
    </div>
  )
}

export default Settings