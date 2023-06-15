import React from 'react'

function ShowCard({ show }) {
  return (
    <div>
        <img src={show.image} alt='poster'/>
    </div>
  )
}

export default ShowCard