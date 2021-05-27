import { About, ErrorBoundary, Footer } from '../../components';
import { HeaderOurCoffee, SearchSection } from './components';
import {} from './OurCoffee.module.scss';
import imageSrcAbout from '../../assets/img/our_coffee/1.jpg';

const OurCoffee = () => {
	
	return (
		<div>
			<ErrorBoundary><HeaderOurCoffee/></ErrorBoundary>
			<ErrorBoundary><About imageSrcAbout={imageSrcAbout} subtitle='About our beans'/></ErrorBoundary>
			<ErrorBoundary><SearchSection/></ErrorBoundary>
			<ErrorBoundary><Footer/></ErrorBoundary>
		</div>

	)
}
export default OurCoffee;