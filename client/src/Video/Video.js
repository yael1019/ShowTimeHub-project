import React, { useState } from 'react'
import './Video.css'
import VideoCard from './VideoCard'
import Search from '../Search/Search'
import HomeCard from './HomeCard'
import { motion, useScroll } from 'framer-motion'

function Video({ videos, moved, setMoved }) {
  const [searching, setSearching] = useState('')
  // const { scrollYProgress } = useScroll({})
  const filteredSearch = videos.filter(video => video.title.toLowerCase().includes(searching.toLowerCase()))
  const mappedVideo = filteredSearch.map(video => video.id === 1 ? null : <VideoCard key={video.id} video={video} />)
  return (
    <div>
      <Search searching={ searching } setSearching={ setSearching } moved={ moved } setMoved={ setMoved } />
      {
        videos[0] !== undefined && searching == ''
        ?
        <HomeCard key={videos[0].id} video={videos[0]} />
        :
        null
      }
      <motion.div 
      // style={{scaleX: scrollYProgress }} 
      // initial={{opacity: 0}}
      // whileInView={{opacity: 1}}
      // transition={{duration: 2}}
      className='flexImage'>
        {
          searching === ''
          ?
          mappedVideo
          :
          <div className='searching-videos'>
            {
              mappedVideo
            }
          </div>
        }
      </motion.div>
    </div>
  )
}

export default Video