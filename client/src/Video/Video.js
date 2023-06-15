import React from 'react'
import './Video.css'
import VideoCard from './VideoCard'
import Search from '../Search/Search'
import Movies from '../Filter/Movies/Movies'
import Categories from '../Filter/Categories/Categories'
import Shows from '../Filter/Shows/Shows'
import HomeCard from './HomeCard'

function Video({ videos }) {
  const mappedVideo = videos.map(video => video.id === 1 ? null : <VideoCard key={video.id} video={video} />)
  return (
    <div>
      <Search />
      {
        videos[0] !== undefined
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