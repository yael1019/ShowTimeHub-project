import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function HomeCard({ video }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/videoInfo', {state: video})
  }
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.5, delay: 0.3}}
    >
        <img src={video.image} alt='poster' id='first' onClick={handleClick}/>
    </motion.div>
  )
}

export default HomeCard