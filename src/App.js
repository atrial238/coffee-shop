import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Home } from './pages';
import './App.scss';

function App() {
	
  return (
	  <Router>
		<div className="App">
			<Route exact path={['/', '/home']} component={Home}/>
		</div>
	 </Router>
  );
}

export default App;
