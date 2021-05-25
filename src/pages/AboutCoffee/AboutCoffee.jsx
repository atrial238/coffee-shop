import {wrapper} from './AboutCoffee.module.scss';
import {HeaderOurCoffee} from '../OurCoffee/components';
import { Footer } from '../../components';
import { AboutSection } from './components';

const AboutCoffee = () => {
	return (
		<div className={wrapper}>
			<HeaderOurCoffee/>
			<AboutSection/>
			<Footer/>
		</div>

	)
}
export default AboutCoffee;