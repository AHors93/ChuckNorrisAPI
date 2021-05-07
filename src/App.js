import React, {Component} from 'react';
import axios from 'axios';

/**
 * Step 5 - The state has been set on lines 10 & 11 and the DOM is updated
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newJoke: '',
    };
    
  }
  
  /**
   * Step 3 - Axios sends GET request 
   * Step 4 - Response recieved and logged in console - Line 23
   */
  async getJoke() {
    try {
      const response = await axios.get('http://api.icndb.com/jokes/random')
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Step 1 - User Clicks Button - Line 40
   * Step 2 - getJoke function is called - Line 40
   */
  render() {
    return(
      <div className="container">
        <h1>Chuck Norris Jokes</h1>
        <h3>Here's one..</h3>
        <button type="button" 
          className="btn btn-primary"
          onClick={this.getJoke}> 
          Random Chuck Jokes!
        </button>
      </div>
    );
  }
}

export default App;

