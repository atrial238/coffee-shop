import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { HeaderPleasure } from './components';
import {wrapper} from './Pleasure.module.scss';
import { About, ErrorBoundary, Footer, GridContainer, Preloader } from '../../components';
import {getCoffeePleasure} from '../../redux/yourPleasureReducer';
import imageSrcAbout from '../../assets/img/pleasure/1.jpg';

const Pleasure = ({coffeePleasure, isError, getCoffeePleasure, isLoading}) => {

	useEffect(() => getCoffeePleasure(), []);

	return (
		<div className={wrapper}>
			<ErrorBoundary><HeaderPleasure/></ErrorBoundary>

			<ErrorBoundary>
				<About imageSrcAbout={imageSrcAbout} subtitle='About our goods'/>
			</ErrorBoundary>

			<ErrorBoundary>
				{(isLoading && <Preloader/>) 
					|| (isError && <div className='error'>Oops! Something went wrong</div>)
					|| <GridContainer coffeePerPage={coffeePleasure}/>}
			</ErrorBoundary>
			
			<ErrorBoundary><Footer/></ErrorBoundary>
		</div>
	)
}

const mapStateToPros = (state) => ({
	coffeePleasure: state.pleasure.coffeePleasure,
	isLoading: state.pleasure.isLoading,
	isError: state.pleasure.isError
})

export default connect(mapStateToPros, {getCoffeePleasure})(Pleasure);

Pleasure.propTypes = {
	coffeePleasure: PropTypes.array,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	getCoffeePleasure: PropTypes.func
}