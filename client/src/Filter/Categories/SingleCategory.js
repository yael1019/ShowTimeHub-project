import React from 'react'
import { useLocation } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function SingleCategory({ videos }) {
    const location = useLocation()
    const navigate = useNavigate()
    const filteredVideos = videos.filter(video => video.category.includes(location.state))
    const mappedVideos = filteredVideos.map(video => <CategoryCard key={video.id} video={video} />)
  return (
    <div className='video-cat'>
      <p className='exit-cat' onClick={() => navigate('/')}><FiArrowLeft/></p>
        {
            mappedVideos
        }
    </div>
  )
}

export default SingleCategory