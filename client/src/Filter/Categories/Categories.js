import React from 'react'
import '../filter.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Categories() {
  const navigate = useNavigate()
  function handleClick(e) {
    const category = e.target.value
    navigate('/category', {state: category})
  }
  return (
    <div>
      <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
      <motion.form
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5, delay: 0.5}}
      id='category-form'>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Drama' onClick={handleClick}>Drama</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Reality TV' onClick={handleClick}>Reality TV</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Thrillers' onClick={handleClick}>Thrillers</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Comedy' onClick={handleClick}>Comedy</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Action & Adventure' onClick={handleClick}>Action & Adventure</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Sci-Fi TV' onClick={handleClick}>Sci-Fi TV</motion.button>
        <motion.button 
        whileHover={{scaleY: 1.1}}
        whileTap={{backgroundColor: 'black', scale: 0.9}}
        className='cat-button' value='Fantasy' onClick={handleClick}>Fantasy</motion.button>
      </motion.form>
    </div>
  )
}

export default Categories