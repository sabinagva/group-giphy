import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FavoriteItem from '../FavoriteItem/FavoriteItem';



function App(props) {
  return (
		<div>
			<h1>Giphy Search!</h1>
			<FavoriteItem item={{id: 1, url:'http://cdn.pixabay.com/photo/2023/05/29/19/24/peonies-8027028_1280.jpg'}}/>
			<Router>
				<Route exact path="/">
					<SearchForm />
				</Route>
			</Router>
		</div>
  );
}

export default App;
