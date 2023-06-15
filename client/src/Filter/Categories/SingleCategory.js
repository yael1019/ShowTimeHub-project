import React from 'react'
import { useLocation } from 'react-router-dom'
import CategoryCard from './CategoryCard'

function SingleCategory({ videos }) {
    const location = useLocation()
    // console.log(location.state)
    const filteredVideos = videos.filter(video => video.category.includes(location.state))
    const mappedVideos = filteredVideos.map(video => <CategoryCard key={video.id} video={video} />)
  return (
    <div>
        {
            mappedVideos
        }
    </div>
  )
}

export default SingleCategory