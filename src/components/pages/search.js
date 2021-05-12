import React from 'react';

const SearchBar = ({ onKeyPress, onSubmit }) => {
    return (
    <form>
        <label htmlFor='header-search'></label>
        <input onKeyUp={onKeyPress} type='text' id='header-search' placeholder='Change name here...' />
        <button type='submit' onClick={onSubmit}>Search</button>
    </form> 
    ) 
}

export default SearchBar;