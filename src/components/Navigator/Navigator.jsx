import {Link, useLocation} from 'react-router-dom';
import { CoffeeBeansTwo } from '..';
import {wrapper, white, black, img, active} from './Navigator.module.scss';

const Navigator = ({color = 'white'}) => {

	const location = useLocation().pathname;

	return(
		<nav className={wrapper  + ' ' + (color === 'white' ? white : black)}>
			<Link to='/home' className={location === '/home' ?  active : null}>Coffee house</Link>
			<Link to='/our_coffee'  className={location === '/our_coffee' ?  active : null} >Our coffee</Link>
			<Link to='/your_pleasure'  className={location === '/your_pleasure' ?  active : null} >For your pleasure</Link>
			<div className={img}><CoffeeBeansTwo/></div>
		</nav>
	)
}

export default Navigator;