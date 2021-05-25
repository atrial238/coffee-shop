import {wrapper, title_style} from './HeaderOurCoffee.module.scss';
import {Header} from '../../../../components';

const HeaderOurCoffee = () => {
	return (
		<section className={wrapper}>
			<Header/>
			<h2 className={`title ${title_style}`}>Our Coffee</h2>
		</section>
	)
}
export default HeaderOurCoffee;