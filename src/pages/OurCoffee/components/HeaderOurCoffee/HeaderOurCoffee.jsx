import {wrapper, title_style} from './HeaderOurCoffee.module.scss';
import {ErrorBoundary, Header} from '../../../../components';

const HeaderOurCoffee = () => {
	return (
		<section className={wrapper}>
			<ErrorBoundary><Header/></ErrorBoundary>
			<h2 className={`title ${title_style}`}>Our Coffee</h2>
		</section>
	)
}
export default HeaderOurCoffee;