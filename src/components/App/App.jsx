import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';


function App(props) {
  return (
    <div>
      <Router>
      <h1>Giphy Search!</h1>
      <Route exact path='/'>
        <SearchForm />
        <SearchResult />
      </Route>
      </Router>
    </div>
  );
}

export default App;