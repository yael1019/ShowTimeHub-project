import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import { useRef } from 'react';
import { motion } from 'framer-motion'

function Nav({ moved }) {
  const navRef = useRef()
  function navButtons() {
    navRef.current.classList.toggle('active')
  }
   return (
    <motion.div
    initial={{opacity: 0,}}
    animate={{opacity: 1,}}
    transition={{duration: 1.7, delay: 0.3}}
     ref={navRef}>
        <NavLink id='userIcon' to='settings'><FaRegUserCircle size={25}/></NavLink>
        <NavLink onClick={navButtons} id='movies' to='movies'>Movies</NavLink>
        <NavLink onClick={navButtons} id='shows' to='shows'>Shows</NavLink>
        <NavLink onClick={navButtons} id='categories' to='categories'>Categories</NavLink>
    </motion.div>
  )
}

export default Nav