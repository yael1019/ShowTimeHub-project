import './App.css';
import {useEffect, useState} from 'react'
import Homepage from './Homepage/Homepage';
import Settings from './Settings/Settings';
import { Routes, Route, useNavigate } from 'react-router-dom'
import NoMatch from './NoMatch'
import Movies from './Filter/Movies/Movies';
import Shows from './Filter/Shows/Shows';
import Nav from './Nav/Nav'
import Categories from './Filter/Categories/Categories';
import SingleCategory from './Filter/Categories/SingleCategory';
import Login from './Login/Login';
import Watched from './Settings/Watched';

function App() {
  const [videos, setVideos] = useState([])
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/check_session')
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => setCurrentUser(data))
          setLoaded(true)
        }
      })
  }, [])

  useEffect(() => {
    fetch('/videos')
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])

  function handleLogin(form) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => setCurrentUser(data))
          setLoaded(true)
          navigate('/')
        }else {
          res.json()
          .then(data => alert(data.message))
          setLoaded(true)
        }
      })
  }
  function handleLogout() {
    setCurrentUser(null)
    fetch('/logout', {
      method: 'DELETE'
    })
    navigate('/login')
  }

  if(!loaded) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }

  return (
    <div className="App">
      {
        currentUser
        ?
        (
          <>
            <Nav />
            <Routes>
              <Route path='/' element={ <Homepage videos={videos} handleLogout={ handleLogout }/> }/>
              <Route path='settings' element={ <Settings currentUser={ currentUser } /> }/>
              <Route path='watched' element={ <Watched /> }/>
              <Route path='*' element={ <NoMatch /> }/>
              <Route path='movies' element={ <Movies videos={videos} /> }/>
              <Route path='shows' element={ <Shows videos={videos} /> }/>
              <Route path='categories' element={ <Categories /> }/>
              <Route path='category' element={ <SingleCategory videos={videos} /> }/>
              <Route path='login' element={ <Login /> }/>
            </Routes>
          </>
        )
        :
        <Login handleLogin={ handleLogin }/>
      }
    </div>
  );
}

export default App;
