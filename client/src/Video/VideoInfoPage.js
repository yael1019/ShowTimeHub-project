import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function VideoInfoPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const video = location.state
  return (
    <div>
        <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
        <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5, delay: 0.5}}
        src={video.image} alt='poster' id='info-pg-poster' />
        <motion.div
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.5, delay: 0.3}}
        id='info-body'>
          <h2>{ video.title }</h2>
          <p>{ video.year }</p>
          <p>{ video.category }</p>
          <p>{ video.rating }</p>
          <p id='description'>{ video.description }</p>
        </motion.div>
        <div className='video-responsive'>
          <iframe
            width="530"
            height="260"
            src='https://www.youtube.com/embed/I1hNAIzkQWY'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
    </div>
  )
}

export default VideoInfoPage