import {wrapper, discription, wrapper_button, title_style} from './MainSection.module.scss';
import {Button, Divider, ErrorBoundary} from '../../../../components/index';
import { Header } from '../../../../components';

const MainSection = () => {
	return (
		<section className={wrapper}>
			<ErrorBoundary><Header /></ErrorBoundary>
			<h1 className={`title ${title_style}`}>Everything You Love About Coffee</h1>
			<Divider/>
			<div className={discription}>
				We makes every day full of energy and taste Want to try our beans?
			</div>
			<div className={wrapper_button}><Button/></div>
		</section>
		
	)
}

export default MainSection;