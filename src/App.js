import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { TodoList } from './TodoList';


const App = () => {

	return(
		<div className="App">
			<header className="App-header">
				<img src={logo} alt="logo" className="App-logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a href="https://github.com/marquisvictor" className="App-link" target="_blank" rel="noopener noreferrer">
					Getting started with react testing library
				</a>
			</header>

			<div className="App-body">
				<BrowserRouter>
					<Route exact path="/" component={TodoList} />
				</BrowserRouter>
			</div>
		</div>
	)
}



export default App;
