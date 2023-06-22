import React from 'react'
import '../filter.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import ShowCard from './ShowCard'
import { motion } from 'framer-motion'

function Shows({ videos }) {
  const navigate = useNavigate()
  const filterShows = videos.filter(video => video.type === 'Show')
  const mappedShows = filterShows.map(show => <ShowCard key={show.id} show={show} />)
  return (
    <div>
      <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
      <motion.div className='videos'>
        {
          mappedShows
        }
      </motion.div>
    </div>
  )
}

export default Shows