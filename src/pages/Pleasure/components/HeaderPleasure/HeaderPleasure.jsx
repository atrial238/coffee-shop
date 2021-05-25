import { Header } from '../../../../components';
import {wrapper, title_style} from './HeaderPleasure.module.scss';

const HeaderPleasure = () => {
	return (
		<section className={wrapper}>
			<Header/>
			<h2 className={`title ${title_style}`}>For your pleasure</h2>
		</section>
	)
}
export default HeaderPleasure;

