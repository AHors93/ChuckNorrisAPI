import React, {useState} from 'react';
import axios from 'axios';

const SearchBar = ({ onKeyPress }) => {
    const [joke, setJoke] = useState()
    const newJoke = async () => {
        const response = await axios.get('http://api.icndb.com/jokes/random')  
    }
    return (
    <form>
        <label htmlFor='header-search'></label>
        <input onKeyUp={(event) => SearchBar(event.target.value)} type='text' id='header-search' placeholder='Change name here...' />
        <button type='submit' onClick={newJoke}>Search</button>
    </form> 
    ) 
}

export default SearchBar;