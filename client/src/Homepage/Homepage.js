import React from 'react'
import Video from '../Video/Video'
import './Homepage.css'
import { motion } from 'framer-motion'


function Homepage({ videos, moved, setMoved }) {
  return (
    <div>
        <motion.h1
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.5, delay: 0.3}}
        >ShowTimeHub</motion.h1>
        <Video videos={videos} moved={ moved } setMoved={ setMoved } />
    </div>
  )
}

export default Homepage