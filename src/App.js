import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Home, OurCoffee } from './pages';
import './App.scss';

function App() {
	
  return (
	  <Router>
		<div className="App">
			<Route exact path={['/', '/home']} component={Home}/>
			<Route exact path='/our_coffee' component={OurCoffee}/>
		</div>
	 </Router>
  );
}

export default App;
