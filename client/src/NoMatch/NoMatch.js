import React from 'react'
import './NoMatch.css'
import { motion } from 'framer-motion'
import image from './ohno-noback.png'

function NoMatch() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.7, delay: 0.3}}
    >
      <h1 id='nomatch'>No Match 404</h1>
      <img src={image} alt='oh no poster' id='ohno'/>
    </motion.div>
  )
}

export default NoMatch