import React from 'react';

const RandomJoke = ({ joke }) => {
    return (
    <form>     
        <h1>Chuck Norris Jokes</h1>
        <h3>Here's one..{joke && joke.id ? <b>{joke.joke}</b>: ''}</h3>
        <button type='button' className='random-button'onClick={() => this.getJoke()}> Random Chuck Jokes!</button>
    </form>      
  ) 
}

export default RandomJoke;