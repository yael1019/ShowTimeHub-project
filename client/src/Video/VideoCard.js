import React from 'react'

function VideoCard({ video }) {
  return (
    <div>
        <img src={video.image} alt='poster' id='all'/>
    </div>
  )
}

export default VideoCard