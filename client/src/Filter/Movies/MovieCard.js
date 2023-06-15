import React from 'react'

function MovieCard({ movie }) {
  return (
    <div>
        <img src={movie.image} alt='poster'/>
    </div>
  )
}

export default MovieCard