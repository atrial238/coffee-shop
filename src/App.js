import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { AboutCoffee, Home, OurCoffee, Pleasure } from './pages';
import store from './redux/store';

import './App.scss';

function App() {
	
  return (
	<Provider store={store}>
		<Router>
			<div className="App">
				<Route exact path={['/', '/home']} component={Home}/>
				<Route exact path='/our_coffee' component={OurCoffee}/>
				<Route exact path='/our_coffee/:item' component={AboutCoffee}/>
				<Route exact path='/your_pleasure' component={Pleasure}/>
			</div>
		</Router>
	</Provider>
  );
}

export default App;
