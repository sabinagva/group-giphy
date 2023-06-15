import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';

function SearchForm () {

    const dispatch = useDispatch();

    let [search, setSearch] = useState('')

    const searchGifs = (event) => {
        event.preventDefault();
        console.log('Search input is:', search)
        dispatch({ type: 'GET_GIF', payload: search})
        setSearch('')
    } 

    return (
        <form onSubmit={searchGifs}>
            <input 
            type='text'
            placeholder='Search for GIFs Here!'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <input type='submit' value='SEARCH' />
            <SearchResult />
        </form>
    )
}

export default SearchForm