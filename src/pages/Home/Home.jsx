import { ErrorBoundary, Footer} from '../../components';
import {AboutUsSection, MainSection, OurBestSection} from './components';

const Home = () => {

	return (
		<>
			<MainSection />
			<AboutUsSection/>
			<ErrorBoundary>
				<OurBestSection />
			</ErrorBoundary>
			
			<Footer/>
		</>
	)
}

export default Home;


