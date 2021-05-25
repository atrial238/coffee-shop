import { Footer } from '../../components';
import { AboutBeans, HeaderOurCoffee, SearchSection } from './components';
import GridContainer from './components/SearchSection/GridContainer/GridContainer';
import {} from './OurCoffee.module.scss';

const OurCoffee = () => {
	return (
		<div>
			<HeaderOurCoffee/>
			<AboutBeans/>
			<SearchSection/>
			<Footer/>
		</div>

	)
}
export default OurCoffee;