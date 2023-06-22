import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function CategoryCard({video}) {
    const navigate = useNavigate()
    function handleClick() {
      navigate('/videoInfo', {state: video})
    }
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 1}}
    transition={{duration: 1.5, delay: 0.3}}
    >
        <img src={video.image} alt='poster' className='allVids-cat' onClick={handleClick}/>
    </motion.div>
  )
}

export default CategoryCard