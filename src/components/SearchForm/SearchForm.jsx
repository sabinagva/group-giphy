import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm () {

    const dispatch = useDispatch();

    let [searchInput, setSearchInput] = useState('')

    return (
        <form>
            <input 
            type='text'
            placeholder='Search for GIFs Here!'
            value={searchInput}
            onChange={(event) => setSearchInput(event)}
            />
            <input type='submit' value='SEARCH' />
        </form>
    )
}

export default SearchForm