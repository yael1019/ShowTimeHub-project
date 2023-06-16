import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeCard({ video }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/videoInfo', {state: video})
  }
  return (
    <div>
        <img src={video.image} alt='poster' id='first' onClick={handleClick}/>
    </div>
  )
}

export default HomeCard