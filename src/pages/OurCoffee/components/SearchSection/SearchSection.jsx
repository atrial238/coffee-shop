
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {GridContainer, Paginator, Preloader} from '../../../../components';
import SearchPanel from './SearchPanel/SearchPanel';
import {setPage, getCoffee} from '../../../../redux/ourCoffeeReducer';
import {wrapper_search_panel, wrapper, wrapper_grid, paginator} from './SearchSection.module.scss';
import { useEffect } from 'react';

const SearchSection = ({coffeePerPage, getCoffee, page, setPage, isLoading, isError, isLastPage, isFirstPage}) => {

	useEffect(() => getCoffee(page), [page, getCoffee]);

	return (
		<section className={wrapper}>
			<div className={wrapper_search_panel}><SearchPanel/></div>
			<div className={wrapper_grid}>

				<div className={paginator}><Paginator setPage={setPage} isLoading={isLoading} isLastPage={isLastPage} isFirstPage={isFirstPage}/></div>

				{(isLoading && <Preloader/>)
				||(isError && <div className='error'>Oops! Something went wrong</div>)
				|| <GridContainer coffeePerPage={coffeePerPage}/>}
				
			</div>
			
		</section>
		)
}
const mapStateToProps = (state) => ({
	coffeePerPage: state.ourCoffee.coffeePerPage,
	isLoading: state.ourCoffee.isLoading,
	isError: state.ourCoffee.isError,
	page: state.ourCoffee.page,
	isFirstPage: state.ourCoffee.isFirstPage,
	isLastPage: state.ourCoffee.isLastPage,
})
export default connect(mapStateToProps, {setPage, getCoffee})(SearchSection);

SearchSection.propTypes = {
	coffeePerPage: PropTypes.array,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	page: PropTypes.number,
	setPage: PropTypes.func,
	getCoffee: PropTypes.func,
	isLastPage: PropTypes.bool,
	isFirstPage: PropTypes.bool,
}