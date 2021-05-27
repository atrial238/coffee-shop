import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardCoffee, Preloader } from '../../../../components';
import {wrapper, card_wrapper, card} from './OurBestSection.module.scss';
import {getBestCoffee} from '../../../../redux/homeReducer';

const OurBestSection = ({bestCoffe, isLoading, isError, getBestCoffee}) => {

	useEffect(() => {getBestCoffee()}, [])

	const bestCoffeeElement = bestCoffe.map(el => <div key={el.id} className={card}><CardCoffee {...el}/></div>);
	
	return (
		<section className={wrapper}>
			<h2 className='subtitle'>Our best</h2>
			
			{(isLoading && <Preloader color='#ffffff'/>)
			|| (isError && <div className='error'>Oops! Something went wrong</div>)
			|| <div className={card_wrapper}>{bestCoffeeElement}</div>}
		</section>
	)
}

const mapStateToProps = (state) => ({
	bestCoffe: state.home.bestCoffe,
	isLoading: state.home.isLoading,
	isError: state.home.isError
	
});

export default connect(mapStateToProps, {getBestCoffee})(OurBestSection);

OurBestSection.propTypes = {
	bestCoffe: PropTypes.array,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	getBestCoffee: PropTypes.func
}


