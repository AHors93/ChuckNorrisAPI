import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RandomJoke from './components/pages/random';
import SearchBar from './components/pages/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {},
      search: '',
      searchLastName: ''
    };
  }

  searchJoke(event) {
    event.preventDefault()
    const { search } = this.state
    const { searchLastName } = this.state

    axios
      .get(`http://api.icndb.com/jokes/random`, { params: { firstName: search, lastName: searchLastName } })
      .then((result => {
        if(result.status === 200) {
          this.setState({ joke: result.data.value })
        }
      }))
  }

  render() {
    return(
      <Router>
        <div id="container">
          <div id="top">
            {/* <Logo Chuck Norris Face/>
            <Header /> */}
          </div>
          <div id="bottom">
            {/* <Sidebar for links/> */}
            <div id="page-container">
              <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route exact path="/search" >
                    <SearchPage />
                </Route>    
                <Route exact path="/random">
                    <RandomPage />
                </Route>
              </Switch>
            </div>   
          </div>        
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/random">Random</Link></li>
              </ul>
            </nav>
          </div>
        </div>        
        </Router>
    );
  }
}

const HomePage = () => {
    return <p>Welcome to my site</p>
}

const SearchPage = () => {
  return (
   <div>
     <p>Search Page</p>
     <SearchBar />
   </div> 
  )
}

const RandomPage = () => {
  return ( 
    <div>
      <p>Random Joke</p>
      <RandomJoke />
    </div>
  )
}



export default App;

