import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './App.scss';
import { ErrorBoundary, PreloaderPage } from './components';

const Home = React.lazy(() => import('./pages/Home/Home'));
const OurCoffee = React.lazy(() => import('./pages/OurCoffee/OurCoffee'));
const AboutCoffee = React.lazy(() => import('./pages/AboutCoffee/AboutCoffee'));
const Pleasure = React.lazy(() => import('./pages/Pleasure/Pleasure'));

function App() {
	
  return (
	<Provider store={store}>
		<Router>
			<div className="App">
				<ErrorBoundary>
					<Suspense fallback={PreloaderPage}>
						<Route exact path={['/', '/home']} component={Home}/>
						<Route exact path='/our_coffee' component={OurCoffee}/>
						<Route exact path='/our_coffee/:id' component={AboutCoffee}/>
						<Route exact path='/your_pleasure' component={Pleasure}/>
					</Suspense>
				</ErrorBoundary>
			</div>
		</Router>
	</Provider>
  );
}

export default App;
