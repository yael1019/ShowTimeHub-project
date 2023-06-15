import React from 'react'
import '../filter.css'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard'

function Movies({ videos }) {
  const navigate = useNavigate()
  const filterMovies = videos.filter(video => video.type === 'Movie')
  const mappedMovies = filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <div>
      <p onClick={() => navigate('/')}><TbCircleLetterX /></p>
      {
        mappedMovies
      }
    </div>
  )
}

export default Movies