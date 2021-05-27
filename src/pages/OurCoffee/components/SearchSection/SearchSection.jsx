
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import {ErrorBoundary, GridContainer, Paginator, Preloader} from '../../../../components';
import SearchPanel from './SearchPanel/SearchPanel';
import {setPage, getCoffee, searchByCountry, searchByName, resetFilter} from '../../../../redux/ourCoffeeReducer';
import {wrapper_search_panel, wrapper, wrapper_grid, paginator, result_search, reset} from './SearchSection.module.scss';

const SearchSection = ({coffeePerPage, getCoffee, page, setPage,
	 isLoading, isError, isLastPage, isFirstPage, isSearchByName, resetFilter,
	 searchByCountry, countrySearch, inputSearch, searchByName, isItemFound}) => {

	useEffect(() => getCoffee(page, countrySearch, inputSearch), [page, getCoffee, countrySearch, inputSearch]);

	const propsSearchPanel = {searchByCountry, countrySearch, isLoading, searchByName};
	const propsPaginator = {setPage, isLoading, isLastPage, isFirstPage};

	return (
		<section className={wrapper}>
			<ErrorBoundary>
				<div className={wrapper_search_panel}><SearchPanel {...propsSearchPanel}/></div>
			</ErrorBoundary>

			<ErrorBoundary>
				<div className={wrapper_grid}>

				<div className={paginator}>
					<div><Paginator {...propsPaginator} /></div>
					<button className={reset} onClick={resetFilter} disabled={isLoading}>Reset filter</button>
				</div>

				{isSearchByName && <div className={result_search}>Search results for: {`"${inputSearch}"`}</div>}
				{(isLoading && <Preloader/>)
				||(isError && <div className='error'>Oops! Something went wrong</div>)
				|| (isItemFound && <div>No matches for: {inputSearch}</div>)
				|| <GridContainer coffeePerPage={coffeePerPage}/>}

				</div>
			</ErrorBoundary>
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
	countrySearch: state.ourCoffee.countrySearch,
	inputSearch: state.ourCoffee.inputSearch,
	isSearchByName: state.ourCoffee.isSearchByName,
	isItemFound: state.ourCoffee.isItemFound
})

const mapDispatchToProps = {
	resetFilter,
	setPage, 
	getCoffee, 
	searchByCountry, 
	searchByName
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);

SearchSection.propTypes = {
	coffeePerPage: PropTypes.array,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	page: PropTypes.number,
	setPage: PropTypes.func,
	getCoffee: PropTypes.func,
	isLastPage: PropTypes.bool,
	isFirstPage: PropTypes.bool,
	searchByCountry: PropTypes.func,
	countrySearch: PropTypes.string,
	inputSearch: PropTypes.string,
	searchByName: PropTypes.func,
	isSearchByName: PropTypes.bool,
	isItemFound: PropTypes.bool
}