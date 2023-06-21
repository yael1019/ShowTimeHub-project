import React from 'react'
import { motion } from 'framer-motion'

function ShowCard({ show }) {
  return (
    <motion.div 
    layout
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    >
        <img src={show.image} alt='poster' className='allVids'/>
    </motion.div>
  )
}

export default ShowCard