import React from 'react'
import '../filter.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard'
import { motion } from 'framer-motion'

function Movies({ videos }) {
  const navigate = useNavigate()
  const filterMovies = videos.filter(video => video.type === 'Movie')
  const mappedMovies = filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <div>
      <p className='exit' onClick={() => navigate('/')}><FiArrowLeft/></p>
      <motion.div className='videos'>
        {
          mappedMovies
        }
      </motion.div>
    </div>
  )
}

export default Movies