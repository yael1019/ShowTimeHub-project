import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'

function VideoCard({ video }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()
  function handleClick() {
    navigate('/videoInfo', {state: video})
  }
  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <motion.div ref={ref}
    variants={{
      hidden: {y: 100, opacity: 0},
      visible: { y: 0, opacity: 1 }
    }}
    initial={"hidden"}
    // animate={{x: 0}}
    animate={mainControls}
    // viewport={{once: true, amount: 0.2}}
    transition={{duration: 2, type: "spring"}}
    >
        <img src={video.image} alt='poster' id='all' onClick={handleClick}/>
    </motion.div>
  )
}

export default VideoCard