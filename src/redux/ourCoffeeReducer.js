import {getAllCoffeeAPI, getCoffeeByCountryAPI, getCoffeeByNameAPI} from '../API/api';

const setIsError = (bool) => ({type: types.SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: types.SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: types.GET_COFFEE, body: data}),
		setIsFirstPage = (bool) => ({type: types.SET_IS_FIRST_PAGE, body: bool}),
		setIsLastPage = (bool) => ({type: types.SET_IS_LAST_PAGE, body: bool}),
		setIsSearchAllCoffee = (bool) => ({type: types.SET_IS_SEARCH_ALL_COFFEE, body: bool}),
		setIsSearchByName = (bool) => ({type: types.SET_IS_SEARCH_BY_NAME, body: bool}),
		setIsSearchByCountry = (bool) => ({type: types.SET_IS_SEARCH_BY_COUNTRY, body: bool}),
		setCountry  = (data) => ({type: types.SET_COUNTRY, body: data}),
		setNameCoffee = (data) => ({type: types.SET_NAME_COFFEE, body: data}),
		setPageZero = () => ({type: types.SET_PAGE_ZERO}),
		setIsItemFound = (bool) => ({type: types.SET_IS_ITEM_FOUND, body: bool});

export const setPage = (counter) => ({type: types.SET_PAGE, body: counter});

export const types = {
	GET_COFFEE: 'ourCoffee_reducer/GET_COFFEE',
	SET_IS_LOADING: 'ourCoffee_reducer/SET_IS_LOADING',
	SET_IS_ERROR: 'ourCoffee_reducer/SET_IS_ERROR',
	SET_PAGE: 'ourCoffee_reducer/SET_PAGE',
	SET_IS_FIRST_PAGE: 'ourCoffee_reducer/SET_IS_FIRST_PAGE',
	SET_IS_LAST_PAGE: 'ourCoffee_reducer/SET_IS_LAST_PAGE',
	SET_IS_SEARCH_ALL_COFFEE: 'ourCoffee_reducer/SET_IS_SEARCH_ALL_COFFEE',
	SET_IS_SEARCH_BY_NAME: 'ourCoffee_reducer/SET_IS_SEARCH_BY_NAME',
	SET_IS_SEARCH_BY_COUNTRY: 'ourCoffee_reducer/SET_IS_SEARCH_BY_COUNTRY',
	SET_COUNTRY: 'ourCoffee_reducer/SET_COUNTRY',
	SET_NAME_COFFEE: 'ourCoffee_reducer/SET_NAME_COFFEE',
	SET_PAGE_ZERO: 'ourCoffee_reducer/SET_PAGE_ZERO',
	SET_IS_ITEM_FOUND: 'ourCoffee_reducer/SET_IS_ITEM_FOUND',
}
 

// thunk creator for searching by country
export const searchByCountry = (country) => (dispatch) =>{
	dispatch(setIsSearchByCountry(true));
	dispatch(setIsSearchAllCoffee(false));
	dispatch(setIsSearchByName(false));
	dispatch(setCountry(country));
	dispatch(setPageZero());
}

// thunk creator for searching by name
export const searchByName = (input) => (dispatch) => {
	if(input !== ''){
		dispatch(setIsSearchByCountry(false));
		dispatch(setIsSearchAllCoffee(false));
		dispatch(setIsSearchByName(true));
		dispatch(setPageZero());
		dispatch(setCountry(''));
		dispatch(setNameCoffee(input));
	}
}

// thunk creator for reset filter
export const resetFilter = () => (dispatch) =>{
	dispatch(setIsSearchByCountry(false));
	dispatch(setIsSearchAllCoffee(true));
	dispatch(setIsSearchByName(false));
	dispatch(setPageZero());
	dispatch(setCountry(''));
	dispatch(setNameCoffee(''));
}

//thunk creator make request to a server
export const getCoffee = (page, country, input) => (dispatch, getState) => {
	//destructuring the required variable from the state
	const {ourCoffee: {isSearchAllCoffee, isSearchByName, isSearchByCountry}} = getState();
	
	//method API depends which request must be done
		//1)if get all the coffee without filtering (getAllCoffeeAPI)
		//2)if filter by country (getCoffeeFilteredAPI)
		//3)if filter by name (getCoffeeByNameAPI)
	const methodAPI = (isSearchAllCoffee && getAllCoffeeAPI) 
							|| (isSearchByCountry && getCoffeeByCountryAPI)
							|| (isSearchByName && getCoffeeByNameAPI);
	
	dispatch(setIsFirstPage(false))
	if(page === 0) dispatch(setIsFirstPage(true))
	dispatch(setIsLastPage(false))
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	dispatch(setIsItemFound(false))

	methodAPI(page, country, input)
		.then(res => {
			dispatch(setIsLoading(false));
			dispatch(setIsError(false));
			if(res === 'error'){
				dispatch(setIsError(true))
			}else if(isSearchByName && !res.coffeePerPage.length){
				dispatch(setIsItemFound(true))
			}else{
				dispatch(setBestCoffee(res.coffeePerPage))
			}
			if(Math.ceil(res.allItems / 6) === (page + 1)) dispatch(setIsLastPage(true))
		})
}

export const initState = {
	coffeePerPage: [],
	isLoading: false,
	isError: false,
	isFirstPage: false,
	isLastPage: false,
	isSearchAllCoffee: true,
	isSearchByName: false,
	isSearchByCountry: false,
	countrySearch: '',
	nameCoffeeSearch: '',
	page: 0,
	isItemFound: false
}

export const ourCoffeeReducer = (state = initState, action) => {
	switch(action.type){
		case types.GET_COFFEE:
			return {...state, coffeePerPage: action.body};
		case types.SET_IS_LOADING:
			return {...state, isLoading: action.body};
		case types.SET_IS_ERROR:
			return {...state, isError: action.body};
		case types.SET_PAGE:
			return {...state, page: state.page + action.body};
		case types.SET_IS_FIRST_PAGE:
			return {...state, isFirstPage: action.body};
		case types.SET_IS_LAST_PAGE:
			return {...state, isLastPage: action.body};
		case types.SET_IS_SEARCH_ALL_COFFEE:
			return {...state, isSearchAllCoffee: action.body};
		case types.SET_IS_SEARCH_BY_NAME:
			return {...state, isSearchByName: action.body};
		case types.SET_IS_SEARCH_BY_COUNTRY:
			return {...state, isSearchByCountry: action.body};
		case types.SET_COUNTRY:
			return {...state, countrySearch: action.body};
		case types.SET_NAME_COFFEE: 
			return {...state, nameCoffeeSearch: action.body};
		case types.SET_IS_ITEM_FOUND:
			return {...state, isItemFound: action.body};
		case types.SET_PAGE_ZERO:
			return {...state, page: 0};
		default: 
			return state;
	}
}