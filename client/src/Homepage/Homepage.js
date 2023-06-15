import React from 'react'
import Video from '../Video/Video'
import './Homepage.css'

function Homepage({ videos, handleLogout }) {
  return (
    <div>
        <h1>ShowTimeHub</h1>
        <button onClick={ handleLogout }>Logout</button>
        <Video videos={videos}/>
    </div>
  )
}

export default Homepage