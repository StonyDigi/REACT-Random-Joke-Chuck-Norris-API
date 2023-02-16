import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Joke from './components/Joke';

function App() {

  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => setJoke(res.data.value))
  }, [])


  const getRandomJoke = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => setJoke(res.data.value))

    document.getElementById('jokeContainer').innerHTML = `<p><strong>${joke}</strong></p>`;

  }
  
  return (
    <>
    <div className="result">
      
      <h1>React-Joke-Chuck-Norris Api</h1>

      <Joke id='jokeContainer' click={getRandomJoke} />

    </div>
    
    </>
  );
}

export default App;
