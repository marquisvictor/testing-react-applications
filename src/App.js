import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';



function App() {

	return (
		<div>
			<h2>
			Welcome to my React App

			</h2>
		</div>
	);
}

function PrivateRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route 
			{...rest}
			render={ (props) => authenticated === true ? <Component {...props} /> : 
			<Redirect to={{pathname: '/login', state:{from: props.locatiom}}} /> }
		/>
	)
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route 
			{...rest} render={(props) => authenticated===false ? <Component {...props} /> 
			: <Redirect to='/chat'/>}
		/>
	)
		
}


export default App;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyD7JGyAQ-a6GQss2uwbBlgh6A3NXXYKu-w",
//     authDomain: "react-chat-ac9e7.firebaseapp.com",
//     databaseURL: "https://react-chat-ac9e7.firebaseio.com",
//     projectId: "react-chat-ac9e7",
//     storageBucket: "react-chat-ac9e7.appspot.com",
//     messagingSenderId: "171279698059",
//     appId: "1:171279698059:web:e37ded35031251772f2c8e",
//     measurementId: "G-M323YCR21C"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
