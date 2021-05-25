import {BrowserRouter as Router, Route} from 'react-router-dom';

import { AboutCoffee, Home, OurCoffee, Pleasure } from './pages';
import './App.scss';

function App() {
	
  return (
	  <Router>
		<div className="App">
			<Route exact path={['/', '/home']} component={Home}/>
			<Route exact path='/our_coffee' component={OurCoffee}/>
			<Route exact path='/our_coffee/:item' component={AboutCoffee}/>
			<Route exact path='/your_pleasure' component={Pleasure}/>
		</div>
	 </Router>
  );
}

export default App;
