import React from 'react'
import './Settings.css'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'


function Settings() {
  const navigate = useNavigate()
  return (
    <div>
        <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
    </div>
  )
}

export default Settings