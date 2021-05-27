import { About, Footer } from '../../components';
import { HeaderOurCoffee, SearchSection } from './components';
import {} from './OurCoffee.module.scss';
import imageSrcAbout from '../../assets/img/our_coffee/1.jpg';

const OurCoffee = () => {
	
	return (
		<div>
			<HeaderOurCoffee/>
			<About imageSrcAbout={imageSrcAbout} subtitle='About our beans'/>
			<SearchSection/>
			<Footer/>
		</div>

	)
}
export default OurCoffee;