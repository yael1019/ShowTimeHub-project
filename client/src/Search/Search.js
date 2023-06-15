import React, { useState } from 'react'
import './Search.css'
import { CgSearch } from 'react-icons/cg'

function Search({ searching, setSearching }) {
  const [search, setSearch] = useState(false)
  function handleClick() {
    setSearch(!search)
  }
  function handleChange(e) {
    setSearching(e.target.value)
  }
  return (
    <div>
      {
        !search
        ?
        <p id='searchIcon' onClick={handleClick}><CgSearch /></p>
        :
        <>
          <p id='searchIcon' onClick={handleClick}><CgSearch /></p>
          <input type='text' placeholder='search' value={ searching } onChange={ handleChange }/>
        </>
      }
    </div>
  )
}

export default Search