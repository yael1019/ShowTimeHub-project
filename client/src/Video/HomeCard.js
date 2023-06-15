import React from 'react'

function HomeCard({ video }) {
    console.log(video.image)
  return (
    <div>
        <img src={video.image} alt='poster' id='first'/>
    </div>
  )
}

export default HomeCard