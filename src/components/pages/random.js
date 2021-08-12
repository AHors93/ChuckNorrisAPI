import React, { useState } from 'react';
import axios from 'axios';


// attempt at Hooks and functional components
const RandomJoke = () => {
    const [joke, setJoke] = useState()
    const getJoke = async () => {
        const response = await axios.get('http://api.icndb.com/jokes/random')
        setJoke(response.data.value)   
    }
    return (
    <form>     
        <h1>Chuck Norris Jokes</h1>
        <h3>Here's one..{joke && joke.id ? <b>{joke.joke}</b>: ''}</h3>
        <button type='button' className='random-button'onClick={getJoke}> Random Chuck Jokes!</button>
    </form>      
  ) 
}

export default RandomJoke;