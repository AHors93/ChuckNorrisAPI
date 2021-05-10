import React, {Component} from 'react';
import Main from './components/routing';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  // async searchJoke() {
  //   try {
  //     const searchResponse = await axios.get('')
  //   }
  // }

  /**
   * Step 1 - User Clicks Button - Line 40
   * Step 2 - getJoke function is called - Line 40
   */
  render() {
    const { joke } = this.state
    console.log(joke)
    
    return(
      <Router>
        <div className='container'>
          <h1>Chuck Norris Jokes</h1>
          <h3>Here's one..{joke && joke.id ? <b>{joke.joke}</b>: ''}</h3>
          <button type='button' 
            className='random-button'
            onClick={() => this.getJoke()}> 
            Random Chuck Jokes!
          </button>
        </div>
        <nav>
          <Main />
        </nav>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="Home">
              <Home />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Search</h2>;
}


export default App;

