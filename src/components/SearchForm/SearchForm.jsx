import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchResult from "../SearchResult/SearchResult";
import { HashRouter as Router, Link } from "react-router-dom";

function SearchForm() {
  const dispatch = useDispatch();

  let [search, setSearch] = useState("");

  const searchGifs = (event) => {
    event.preventDefault();
    console.log("Search input is:", search);
    dispatch({ type: "GET_GIF", payload: search });
    setSearch("");
  };

  return (
    <Router>
      <Link to="/favorites">Your Favorites List</Link>
      <br></br>
      <br></br>
      <form onSubmit={searchGifs}>
        <input
          type="text"
          placeholder="Search for GIFs Here!"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <input type="submit" value="SEARCH" />
        <SearchResult />
      </form>
    </Router>
  );
}

export default SearchForm;
