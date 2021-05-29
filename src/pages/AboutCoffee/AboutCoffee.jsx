import {wrapper} from './AboutCoffee.module.scss';
import {HeaderOurCoffee} from '../OurCoffee/components';
import { ErrorBoundary, Footer } from '../../components';
import { AboutSection } from './components';

const AboutCoffee = () => {
	return (
		<div className={wrapper}>
			<ErrorBoundary><HeaderOurCoffee/></ErrorBoundary>
			<ErrorBoundary><AboutSection/></ErrorBoundary>
			<ErrorBoundary><Footer/></ErrorBoundary>
		</div>
	)
}
export default AboutCoffee;