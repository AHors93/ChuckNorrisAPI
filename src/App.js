import React, {Component} from 'react';
import axios from 'axios';

/**
 * Step 5 - The state has been set on lines 10 & 11 and the DOM is updated
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {},
    };
  }
  
  /**
   * Step 3 - Axios sends GET request 
   * Step 4 - Response recieved and logged in console - Line 23
   * 
   */
  async getJoke() {
    try {
      const response = await axios.get('http://api.icndb.com/jokes/random')
      this.setState({joke: response.data.value})
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Step 1 - User Clicks Button - Line 40
   * Step 2 - getJoke function is called - Line 40
   */
  render() {
    const { joke } = this.state
    console.log(joke)
    
    return(
      <div className='container'>
        <h1>Chuck Norris Jokes</h1>
        <h3>Here's one..{joke && joke.id ? <b>{joke.joke}</b>: ''}</h3>
        <button type='button' 
          className='random-button'
          onClick={() => this.getJoke()}> 
          Random Chuck Jokes!
        </button>
      </div>
    );
  }
}

export default App;

