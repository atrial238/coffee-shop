import { useLocation} from 'react-router-dom';
import { CoffeeBeansTwo } from '..';
import {wrapper, white, black, img, active} from './Navigator.module.scss';
import {Link, fade} from "react-tiger-transition";

fade({name: "default-fade"});

const Navigator = ({color = 'white'}) => {

	const location = useLocation().pathname;

	return(
		<nav className={wrapper  + ' ' + (color === 'white' ? white : black)}>
			<Link 
				to='/home' 
				className={location === '/home' || location === '/' ? active : null} 
				transition='default-fade'
			>
				Coffee house
			</Link>

			<Link
				to='/our_coffee' 
				className={/^\/our_coffee/.test(location) ? active : null} 
				transition='default-fade' 
			>
				Our coffee
			</Link>

			<Link
				to='/your_pleasure' 
				className={location === '/your_pleasure' ? active : null} 
				transition='default-fade' 
			>
				For your pleasure
			</Link>
			<div className={img}><CoffeeBeansTwo/></div>
		</nav>
	)
}

export default Navigator;