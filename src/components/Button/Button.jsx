import { Link } from 'react-router-dom';
import {wrapper} from './Button.module.scss';

const Button = () => {
	return (
		<Link to='/our_coffee' className={wrapper}>More</Link>
	)
}
export default Button;