import {wrapper, header, discription, wrapper_button} from './Home.module.scss';
import {Button, Divider, Navigator} from '../../components/index';
const Home = () => {
	return (
		<div className={wrapper}>
			<header className={header}><Navigator /></header>
			<h1 className='title'>Everything You Love About Coffee</h1>
			<Divider/>
			<div className={discription}>
				We makes every day full of energy and taste Want to try our beans?
			</div>
			<div className={wrapper_button}><Button/></div>
		</div>
		
	)
}

export default Home;