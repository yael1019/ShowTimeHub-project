import React, { useState } from 'react'
import './Video.css'
import VideoCard from './VideoCard'
import Search from '../Search/Search'
import HomeCard from './HomeCard'

function Video({ videos }) {
  const [searching, setSearching] = useState('')
  const filteredSearch = videos.filter(video => video.title.toLowerCase().includes(searching.toLowerCase()))
  const mappedVideo = filteredSearch.map(video => video.id === 1 ? null : <VideoCard key={video.id} video={video} />)
  return (
    <div>
      <Search searching={ searching } setSearching={ setSearching }/>
      {
        videos[0] !== undefined && searching == ''
        ?
        <HomeCard key={videos[0].id} video={videos[0]} />
        :
        null
      }
      <div className='flexImage'>
        {
          mappedVideo
        }
      </div>
    </div>
  )
}

export default Video