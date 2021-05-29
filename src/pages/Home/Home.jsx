import { useRef } from 'react';
import { ErrorBoundary, Footer} from '../../components';
import {AboutUsSection, MainSection, OurBestSection} from './components';

const Home = () => {
	const scrollToRef = useRef(null);

	const executeScroll = () => scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	return (
		<>
			<MainSection executeScroll={executeScroll}/>
			<AboutUsSection scrollToRef={scrollToRef}/>
			<ErrorBoundary>
				<OurBestSection />
			</ErrorBoundary>
			<Footer/>
		</>
	)
}

export default Home;


