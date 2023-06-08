import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

function App() {
// useEffect(() => {
//   console.log('hi')
//   const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'eeee85e3c7mshfd54b6ce4fba9c3p17a142jsne340013be811',
//       'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     }
//   };
//   fetch(url, options)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }, [])
// breioernorgf
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
