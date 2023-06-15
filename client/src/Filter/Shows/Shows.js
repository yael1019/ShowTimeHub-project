import React from 'react'
import '../filter.css'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import ShowCard from './ShowCard'

function Shows({ videos }) {
  const navigate = useNavigate()
  const filterShows = videos.filter(video => video.type === 'Show')
  const mappedShows = filterShows.map(show => <ShowCard key={show.id} show={show} />)
  return (
    <div>
      <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
      {
        mappedShows
      }
    </div>
  )
}

export default Shows