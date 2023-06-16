import React from 'react'
import { useLocation } from 'react-router-dom'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function VideoInfoPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const video = location.state
  return (
    <div>
        <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
        <img src={video.image} alt='poster' />
        <h2>{ video.title }</h2>
        <p>{ video.year }</p>
        <p>{ video.category }</p>
        <p>{ video.rating }</p>
        <p>{ video.description }</p>
    </div>
  )
}

export default VideoInfoPage