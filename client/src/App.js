import './App.css';
import {useEffect, useState} from 'react'
import Video from './Video/Video'
import Settings from './Settings/Settings';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/videos')
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <div className="App">
      <h1>ShowTimeHub</h1>
      <Settings />
      <Video videos={videos}/>
    </div>
  );
}

export default App;
