import React, { useState, useEffect } from 'react'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import WatchedCard from './WatchedCard'

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
        <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
        {
            mappedWatched
        }
    </div>
  )
}

export default Watched