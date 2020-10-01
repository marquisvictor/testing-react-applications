import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { TodoList } from "./TodoList";
import { TodoItem } from './TodoItem'
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Getting started with React testing library
				</a>
			</header>
			<div className="App-body">
				<BrowserRouter>
					<Route path="/item/:id" component={TodoItem} />
					<Route exact path="/" component={TodoList} />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
