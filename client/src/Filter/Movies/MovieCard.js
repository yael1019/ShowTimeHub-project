import React from 'react'
import { motion } from 'framer-motion'

function MovieCard({ movie }) {
  return (
    <motion.div 
    layout
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    >
        <img src={movie.image} alt='poster' className='allVids'/>
    </motion.div>
  )
}

export default MovieCard