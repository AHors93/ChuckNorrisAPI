import React from 'react';

const SearchBar = () => {
    return (
    <form action='/' method='GET'>
        <label htmlFor='header-search'></label>
        <input type='text' id='header-search' placeholder='Search jokes here...'> 
        </input>
        <button type='submit'>Search</button>
    </form> 
    ) 
}

export default SearchBar;