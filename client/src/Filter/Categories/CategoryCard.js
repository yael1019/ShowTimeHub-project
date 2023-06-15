import React from 'react'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function CategoryCard({video}) {
    const navigate = useNavigate()
  return (
    <div>
        <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
        <img src={video.image} alt='poster'/>
    </div>
  )
}

export default CategoryCard