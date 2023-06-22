import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function CategoryCard({video}) {
    const navigate = useNavigate()
    function handleClick() {
      navigate('/videoInfo', {state: video})
    }
  return (
    <div>
        <p onClick={() => navigate('/')}><FiArrowLeft/></p>
        <img src={video.image} alt='poster' onClick={handleClick}/>
    </div>
  )
}

export default CategoryCard