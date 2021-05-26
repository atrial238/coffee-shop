import { connect } from 'react-redux';
import { Footer} from '../../components';
import {AboutUsSection, MainSection, OurBestSection} from './components';
import {getBestCoffee} from '../../redux/homeReducer';

const Home = (props) => {

	return (
		<>
			<MainSection />
			<AboutUsSection/>
			<OurBestSection {...props}/>
			<Footer/>
		</>
	)
}

const mapStateToProps = (state) => ({
	bestCoffe: state.home.bestCoffe,
	isLoading: state.home.isLoading,
	isError: state.home.isError
	
});

export default connect(mapStateToProps, {getBestCoffee})(Home);


