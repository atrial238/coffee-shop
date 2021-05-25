import {wrapper, header, discription, wrapper_button} from './MainSection.module.scss';
import {Button, Divider, Navigator} from '../../components/index';

const MainSection = () => {
	return (
		<section className={wrapper}>
			<header className={header}><Navigator /></header>
			<h1 className='title'>Everything You Love About Coffee</h1>
			<Divider/>
			<div className={discription}>
				We makes every day full of energy and taste Want to try our beans?
			</div>
			<div className={wrapper_button}><Button/></div>
		</section>
		
	)
}

export default MainSection;