// import { Link } from 'react-router-dom';
import {wrapper} from './Button.module.scss';
import { Link } from 'react-scroll'

const Button = () => {
	return (
		<Link to='about' smooth={true} duration={700}  className={wrapper}>More</Link>
	)
}
export default Button;