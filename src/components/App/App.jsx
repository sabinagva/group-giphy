import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';



function App(props) {
  return (
		<div>
			<h1>Giphy Search!</h1>
			<Router>
				<Route exact path="/">
					<SearchForm />
				</Route>
			</Router>
		</div>
  );
}

export default App;
