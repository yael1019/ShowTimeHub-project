import React from 'react'
import { useNavigate } from 'react-router-dom'

function WatchedCard({ video }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/videoInfo', {state: video})
  }
  return (
    <div>
        <img src={ video.image } alt='poster' onClick={handleClick}/>
    </div>
  )
}

export default WatchedCard