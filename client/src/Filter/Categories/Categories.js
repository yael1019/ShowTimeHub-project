import React from 'react'
import '../filter.css'
import { TbCircleLetterX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const navigate = useNavigate()
  function handleClick(e) {
    const category = e.target.value
    navigate('/category', {state: category})
  }
  return (
    <div>
      <p className='exit' onClick={() => navigate('/')}><TbCircleLetterX /></p>
      <form>
        <button value='Drama' onClick={handleClick}>Drama</button>
        <button value='Reality TV' onClick={handleClick}>Reality TV</button>
        <button value='Thrillers' onClick={handleClick}>Thrillers</button>
        <button value='Comedy' onClick={handleClick}>Comedy</button>
        <button value='Action & Adventure' onClick={handleClick}>Action & Adventure</button>
        <button value='Sci-Fi TV' onClick={handleClick}>Sci-Fi TV</button>
        <button value='Fantasy' onClick={handleClick}>Fantasy</button>
      </form>
    </div>
  )
}

export default Categories