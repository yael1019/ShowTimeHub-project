import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import WatchedCard from './WatchedCard'
import './Settings.css'

function Watched() {
    const navigate = useNavigate()
    const location = useLocation()
    const [watched, setWatched] = useState([])
    useEffect(() => {
        fetch(`/videos/user/${location.state.id}`)
        .then(res => res.json())
        .then(data => setWatched(data))
    }, [])
    const mappedWatched = watched.map(video => <WatchedCard key={video.id} video={video} />)
  return (
    <div>
        <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
        <div className='watchedvidsdiv'>
          {
              mappedWatched
          }
        </div>
    </div>
  )
}

export default Watched