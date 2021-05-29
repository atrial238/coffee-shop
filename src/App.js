import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navigation, Route} from "react-tiger-transition";

import store from './redux/store';
import './App.scss';
import { ErrorBoundary } from './components';
import { AboutCoffee, Home , OurCoffee, Pleasure} from './pages';

function App() {
	
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<ErrorBoundary>
						<Navigation>
							<Route exact path={['/', '/home']} screen><Home/></Route>
							<Route exact path='/our_coffee' screen><OurCoffee/></Route>
							<Route exact path='/our_coffee/:id' screen><AboutCoffee/></Route>
							<Route exact path='/your_pleasure' screen><Pleasure/></Route>
						</Navigation>
					</ErrorBoundary>
				</div>
			</Router>
		</Provider>
	);
}

export default App;