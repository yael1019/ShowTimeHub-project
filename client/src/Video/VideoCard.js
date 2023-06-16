import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoCard({ video }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/videoInfo', {state: video})
  }
  return (
    <div>
        <img src={video.image} alt='poster' id='all' onClick={handleClick}/>
    </div>
  )
}

export default VideoCard