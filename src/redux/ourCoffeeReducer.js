import {getAllCoffeeAPI, getCoffeeFilteredAPI, getCoffeeByName} from '../API/api';

const setIsError = (bool) => ({type: SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: GET_COFFEE, body: data}),
		setIsFirstPage = (bool) => ({type: SET_IS_FIRST_PAGE, body: bool}),
		setIsLastPage = (bool) => ({type: SET_IS_LAST_PAGE, body: bool}),
		setIsSearchAllCoffee = (bool) => ({type: SET_IS_SEARCH_ALL_COFFEE, body: bool}),
		setIsSearchByName = (bool) => ({type: SET_IS_SEARCH_BY_NAME, body: bool}),
		setIsSearchByFilter = (bool) => ({type: SET_IS_SEARCH_BY_FILTER, body: bool}),
		setCountry  = (data) => ({type: SET_COUNTRY, body: data}),
		setInput = (data) => ({type: SET_INPUT, body: data}),
		setPageZero = () => ({type: SET_PAGE_ZERO}),
		setIsItemFound = (bool) => ({type: SET_IS_ITEM_FOUND, body: bool});

export const setPage = (counter) => ({type: SET_PAGE, body: counter});

const GET_COFFEE ='ourCoffee_reducer/GET_BEST_COFFEE',
		SET_IS_LOADING ='ourCoffee_reducer/SET_IS_LOADING',
		SET_IS_ERROR ='ourCoffee_reducer/SET_IS_ERROR',
		SET_PAGE = 'ourCoffee_reducer/SET_PAGE',
		SET_IS_FIRST_PAGE = 'ourCoffee_reducer/SET_IS_FIRST_PAGE',
		SET_IS_LAST_PAGE = 'ourCoffee_reducer/SET_IS_LAST_PAGE',
		SET_IS_SEARCH_ALL_COFFEE = 'ourCoffee_reducer/SET_IS_SEARCH_ALL_COFFEE',
		SET_IS_SEARCH_BY_NAME = 'ourCoffee_reducer/SET_IS_SEARCH_BY_NAME',
		SET_IS_SEARCH_BY_FILTER = 'ourCoffee_reducer/SET_IS_SEARCH_BY_FILTER',
		SET_COUNTRY = 'ourCoffee_reducer/SET_COUNTRY',
		SET_INPUT = 'ourCoffee_reducer/SET_INPUT',
		SET_PAGE_ZERO = 'ourCoffee_reducer/SET_PAGE_ZERO',
		SET_IS_ITEM_FOUND = 'ourCoffee_reducer/SET_IS_ITEM_FOUND';

// thunk creator for searching by country
export const searchByCountry = (country) => (dispatch) =>{
	dispatch(setIsSearchByFilter(true));
	dispatch(setIsSearchAllCoffee(false));
	dispatch(setIsSearchByName(false));
	dispatch(setCountry(country));
	dispatch(setPageZero());
}

// thunk creator for searching by name
export const searchByName = (input) => (dispatch) => {
	dispatch(setIsSearchByFilter(false));
	dispatch(setIsSearchAllCoffee(false));
	dispatch(setIsSearchByName(true));
	dispatch(setPageZero());
	dispatch(setCountry(''));
	dispatch(setInput(input));
}

// thunk creator for reset filter
export const resetFilter = () => (dispatch) =>{
	dispatch(setIsSearchByFilter(false));
	dispatch(setIsSearchAllCoffee(true));
	dispatch(setIsSearchByName(false));
	dispatch(setPageZero());
	dispatch(setCountry(''));
	dispatch(setInput(''));
}

//thunk creator make request to a server
export const getCoffee = (page, country, input) => (dispatch, getState) => {
	//destructuring the required variable from the state
	const {ourCoffee: {isSearchAllCoffee, isSearchByName, isSearchByFilter}} = getState();
	
	//method API depends which request must be done
		//1)if get all the coffee without filtering (getAllCoffeeAPI)
		//2)if filter by country (getCoffeeFilteredAPI)
		//3)if filter by name (getCoffeeByName)
	const methodAPI = (isSearchAllCoffee && getAllCoffeeAPI) 
							|| (isSearchByFilter && getCoffeeFilteredAPI)
							|| (isSearchByName && getCoffeeByName);
	
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

const initState = {
	coffeePerPage: [],
	isLoading: false,
	isError: false,
	isFirstPage: false,
	isLastPage: false,
	isSearchAllCoffee: true,
	isSearchByName: false,
	isSearchByFilter: false,
	countrySearch: '',
	inputSearch: '',
	page: 0,
	isItemFound: false
}

export const ourCoffeeReducer = (state = initState, action) => {
	switch(action.type){
		case GET_COFFEE:
			return {...state, coffeePerPage: action.body};
		case SET_IS_LOADING:
			return {...state, isLoading: action.body};
		case SET_IS_ERROR:
			return {...state, isError: action.body};
		case SET_PAGE:
			return {...state, page: state.page + action.body};
		case SET_IS_FIRST_PAGE:
			return {...state, isFirstPage: action.body};
		case SET_IS_LAST_PAGE:
			return {...state, isLastPage: action.body};
		case SET_IS_SEARCH_ALL_COFFEE:
			return {...state, isSearchAllCoffee: action.body};
		case SET_IS_SEARCH_BY_NAME:
			return {...state, isSearchByName: action.body};
		case SET_IS_SEARCH_BY_FILTER:
			return {...state, isSearchByFilter: action.body};
		case SET_COUNTRY:
			return {...state, countrySearch: action.body};
		case SET_INPUT: 
			return {...state, inputSearch: action.body};
		case SET_IS_ITEM_FOUND:
			return {...state, isItemFound: action.body};
		case SET_PAGE_ZERO:
			return {...state, page: 0};
		default: 
			return state;
	}
}