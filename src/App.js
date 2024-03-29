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
    }; 
  }

  handleSearch(searchInput, secondInput) {
    axios
      .get(`http://api.icndb.com/jokes/random`, { params: { firstName: searchInput, secondName: secondInput }, })
      .then(result => {
        if(result.status === 200) {
          this.setState({ joke: result.data.value })
        }
      })
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
                    <SearchPage onSearchResult={(value) => this.handleSearch(value)} />
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

const SearchPage = ({onSearchResult}) => {
  return (
   <div>
     <p>Search Page</p>
     <SearchBar onSearchResult={onSearchResult}/>
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

