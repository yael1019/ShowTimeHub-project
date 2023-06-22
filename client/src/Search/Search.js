import React, { useState } from 'react'
import './Search.css'
import { CgSearch } from 'react-icons/cg'
import { motion } from 'framer-motion'

function Search({ searching, setSearching }) {
  const [search, setSearch] = useState(false)
  function handleClick() {
    setSearch(!search)
  }
  function handleChange(e) {
    setSearching(e.target.value)
  }
  return (
    <motion.div 
    
    className='search-bar'>


      {/* {
        !search
        ?
        <p id='searchIcon' onClick={handleClick}><CgSearch /></p>
        :
        <motion.div initial={{opacity: 0}} 
        animate={{opacity: 1, width: search ? 200 : 2}} 
        transition={{duration: 1.5}}>
          <p id='searchIcon' onClick={handleClick}><CgSearch color='black'/></p>
          <motion.input 
          id='search-box' type='text' placeholder='search' value={ searching } onChange={ handleChange }/>
        </motion.div>
      } */}



        <motion.p 
        animate={{
          backgroundColor: search ? "transparent" : "red",
          color: search ? "black" : "white",
          transition: {
            delay: search ? 0 : 0.5
          }
        }}
        id='searchIcon' onClick={handleClick}><CgSearch/></motion.p>
        <motion.input 
        animate={{
          width: search ? 200 : 0,
          // backgroundColor: search ? "white" : "transparent",
          transition: {
            duration: 0.5,
            ease: "circOut"
          }
        }}
        exit={{
          transition: {
            duration: 0.5,
            ease: "circIn"
          }
        }}
         id='search-box' type='text' placeholder='search' value={ searching } onChange={ handleChange }/>
    </motion.div>
  )
}

export default Search