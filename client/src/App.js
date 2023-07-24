import './App.css';
import {useEffect, useState} from 'react'
import Homepage from './Homepage/Homepage';
import Settings from './Settings/Settings';
import { Routes, Route, useNavigate } from 'react-router-dom'
import NoMatch from './NoMatch/NoMatch'
import Movies from './Filter/Movies/Movies';
import Shows from './Filter/Shows/Shows';
import Nav from './Nav/Nav'
import Categories from './Filter/Categories/Categories';
import SingleCategory from './Filter/Categories/SingleCategory';
import Login from './Login/Login';
import Watched from './Settings/Watched';
import VideoInfoPage from './Video/VideoInfoPage';
import PacmanLoader from "react-spinners/PacmanLoader";
import CreateAccount from './CreateAccount/CreateAccount';

function App() {
  const [videos, setVideos] = useState([])
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    fetch('/check_session')
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => setCurrentUser(data))
          setLoaded(true)
        } else {
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

  function handleCreate(form) {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if(res.ok) {
          // res.json()
          // .then(data => console.log(data))
        } else {
          alert('Error')
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
        <p id='loading'>Loading</p>
        <PacmanLoader color="#36d7b7" id='spinner'/>
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
            <Nav moved={ moved }/>
            <Routes>
              <Route path='/' element={ <Homepage videos={videos} handleLogout={ handleLogout } moved={ moved } setMoved={ setMoved }/> }/>
              <Route path='settings' element={ <Settings currentUser={ currentUser } handleLogout={handleLogout} /> }/>
              <Route path='watched' element={ <Watched /> }/>
              <Route path='*' element={ <NoMatch /> }/>
              <Route path='movies' element={ <Movies videos={videos} /> }/>
              <Route path='shows' element={ <Shows videos={videos} /> }/>
              <Route path='categories' element={ <Categories /> }/>
              <Route path='category' element={ <SingleCategory videos={videos} /> }/>
              <Route path='login' element={ <Login /> }/>
              <Route path='videoInfo' element={ <VideoInfoPage /> }/>
            </Routes>
          </>
        )
        :
        <>
          {/* <Login handleLogin={ handleLogin }/> */}
          <Routes>
            <Route path='/login' element={ <Login handleLogin={ handleLogin } /> } />
            <Route path='/create' element={ <CreateAccount handleCreate={ handleCreate } /> } />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
