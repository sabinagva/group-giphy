import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FavoriteList from '../FavoriteList/FavoriteList';



function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
    
      <Router>
        <Route path='/' exact>
          <SearchForm />
        </Route>
        <Route path='/favorites' exact>
          <FavoriteList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
