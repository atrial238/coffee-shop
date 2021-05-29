// import { Link } from 'react-router-dom';
import {wrapper} from './Button.module.scss';

const Button = ({executeScroll}) => {
	return (
		<button className={wrapper} onClick={executeScroll}>More</button>
	)
}
export default Button;