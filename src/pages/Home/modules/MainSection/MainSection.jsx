import {wrapper, discription, wrapper_button, divider} from './MainSection.module.scss';
import {Button, Divider} from '../../../../components/index';
import { Header } from '../../../../modules';

const MainSection = () => {
	return (
		<section className={wrapper}>
			<Header />
			<div className={divider}><Divider/></div>
			<div className={discription}>
				We makes every day full of energy and taste Want to try our beans?
			</div>
			<div className={wrapper_button}><Button/></div>
		</section>
		
	)
}

export default MainSection;