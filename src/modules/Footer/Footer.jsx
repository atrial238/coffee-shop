import {wrapper, divider, navigator} from './Footer.module.scss';
import {Divider, Navigator} from '../../components';

const Footer = () => {
	return (
		<footer className={wrapper}>
			<div className={navigator}><Navigator color='black'/></div>
			<div className={divider}><Divider color='black'/></div>
		</footer>
	)
}
export default Footer;