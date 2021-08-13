import React, {useState} from 'react';

const SearchBar = ({ onSearchResult }) => {
    const [result, setResult] = useState()
    const onClick = (event) => {
        event.preventDefault()
        onSearchResult(result)
    }
    return (
    <form>
        <label htmlFor='header-search'></label>
        <input onKeyUp={(event) => setResult(event.target.value)} type='text' id='header-search' placeholder='Change name here...' />
        <button type='submit' onClick={onClick}>Submit</button>
    </form> 
    ) 
}
export default SearchBar;