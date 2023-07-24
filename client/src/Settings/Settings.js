import React from 'react'
import './Settings.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import minion from './minion-noback.png'

function Settings({ currentUser, handleLogout }) {
  const navigate = useNavigate()
  function handleWatched() {
    navigate('/watched', {state: currentUser})
  }
  function handleDelete() {
    // console.log(currentUser)
    if(window.confirm('Are you sure you want to delete your account? \nThis action can not be undone and will result in a loss of all your data.')) {
      fetch(`/users/${currentUser.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        }
      })
      .then(res => {
        if(res.ok) {
          handleLogout()
          alert('Account has been deleted.')
        }
      })
    } else {
      console.log('false')
    }
    
  }
  return (
    <div>
        <p onClick={() => navigate('/')} className='exit'><FiArrowLeft/></p>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5, delay: 0.5}}
        className='settingDiv'>
          <h2 className='info'>{ currentUser.first_name }</h2>
          <h2 className='info'>{ currentUser.last_name }</h2>
          <h2 className='info'>{ currentUser.email }</h2>
          <h2 className='info'>password: *******</h2>
          <motion.p
          whileHover={{x: 20}}
          onClick={handleWatched} className='info watched'>Your Watched</motion.p>  
          <motion.button
          whileHover={{scaleY: 1.1}}
          whileTap={{backgroundColor: 'black', scale: 0.9}}
          onClick={ handleLogout } id='logout'>Logout</motion.button>
          <motion.button
          id='deleteAccount'
          whileHover={{scaleY: 1.1}}
          whileTap={{backgroundColor: 'black', scale: 0.9}}
          onClick={handleDelete}
          >Delete Account</motion.button>
          <img src={minion} alt='minion' id='minion'/>
        </motion.div>
    </div>
  )
}

export default Settings