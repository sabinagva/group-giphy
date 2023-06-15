import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm () {

    const dispatch = useDispatch();

    let [searchInput, setSearchInput] = useState('')

    const searchGifs = (event) => {
        event.preventDefault();
        console.log('Search input is:', searchInput)
        dispatch({ type: 'GET_GIF', payload: searchInput})
        setSearchInput('')
    } 

    return (
        <form onSubmit={searchGifs}>
            <input 
            type='text'
            placeholder='Search for GIFs Here!'
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            />
            <input type='submit' value='SEARCH' />
        </form>
    )
}

export default SearchForm