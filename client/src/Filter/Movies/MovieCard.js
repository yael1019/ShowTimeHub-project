import React from 'react'
import { motion } from 'framer-motion'

function MovieCard({ movie }) {
  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 1}}
    transition={{duration: 1.5, delay: 0.3}}
    >
        <img src={movie.image} alt='poster' className='allVids'/>
    </motion.div>
  )
}

export default MovieCard