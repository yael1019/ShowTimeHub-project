import React from 'react'
import Video from './Video/Video'
import './Homepage.css'

function Homepage({ videos }) {
  return (
    <div>
        <h1>ShowTimeHub</h1>
        <Video videos={videos}/>
    </div>
  )
}

export default Homepage