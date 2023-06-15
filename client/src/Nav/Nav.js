import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'

function Nav() {
  return (
    <div>
        <NavLink id='userIcon' to='settings'><FaRegUserCircle size={25}/></NavLink>
        <NavLink id='movies' to='movies'>Movies</NavLink>
        <NavLink id='shows' to='shows'>Shows</NavLink>
        <NavLink id='categories' to='categories'>Categories</NavLink>
    </div>
  )
}

export default Nav