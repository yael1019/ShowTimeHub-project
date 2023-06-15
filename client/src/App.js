import './App.css';
import {useEffect, useState} from 'react'
import Homepage from './Homepage';
import Settings from './Settings/Settings';
import { Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import Movies from './Filter/Movies/Movies';
import Shows from './Filter/Shows/Shows';
import Nav from './Nav/Nav'
import Categories from './Filter/Categories/Categories';
import SingleCategory from './Filter/Categories/SingleCategory';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/videos')
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <div className="App">
      <Nav />
      {/* <Homepage videos={videos}/> */}
      <Routes>
        <Route path='/' element={ <Homepage videos={videos}/> }/>
        <Route path='settings' element={ <Settings /> }/>
        <Route path='*' element={ <NoMatch /> }/>
        <Route path='movies' element={ <Movies videos={videos} /> }/>
        <Route path='shows' element={ <Shows videos={videos} /> }/>
        <Route path='categories' element={ <Categories /> }/>
        <Route path='category' element={ <SingleCategory videos={videos} /> }/>
      </Routes>
    </div>
  );
}

export default App;
