import React, { Component } from 'react';

class SearchPage extends Component {
    render() {
        return (
            <div className='search-page'>
                <h2>Search for Jokes</h2>
                <button>Search</button>
                {/* <input type='text'>Type here...</input> */}
            </div>
        )
    }
}

export default SearchPage;