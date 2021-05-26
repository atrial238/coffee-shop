import {getAllCoffeeAPI} from '../API/api';

const setIsError = (bool) => ({type: SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: GET_COFFEE, body: data}),
		setIsFirstPage = (bool) => ({type: SET_IS_FIRST_PAGE, body: bool}),
		setIsLastPage = (bool) => ({type: SET_IS_LAST_PAGE, body: bool})


export const setPage = (counter) => ({type: SET_PAGE, body: counter});

const GET_COFFEE ='ourCoffee_reducer/GET_BEST_COFFEE',
		SET_IS_LOADING ='ourCoffee_reducer/SET_IS_LOADING',
		SET_IS_ERROR ='ourCoffee_reducer/SET_IS_ERROR',
		SET_PAGE = 'ourCoffee_reducer/SET_PAGE',
		SET_IS_FIRST_PAGE = 'ourCoffee_reducer/SET_IS_FIRST_PAGE',
		SET_IS_LAST_PAGE = 'ourCoffee_reducer/SET_IS_LAST_PAGE'

export const getCoffee = (page) => (dispatch) => {
	dispatch(setIsFirstPage(false))
	if(page === 0) dispatch(setIsFirstPage(true))
	dispatch(setIsLastPage(false))
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	
	getAllCoffeeAPI(page)
		.then(res => {
			dispatch(setIsLoading(false))
			if(res === 'error'){
				dispatch(setIsError(true))
			}else{
				dispatch(setIsError(false))
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
	page: 0
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
			return {...state, isLastPage: action.body}
		default: 
			return state;
	}
}
