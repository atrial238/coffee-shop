import {getSpecificCoffeeAPI} from '../API/api';

const setIsError = (bool) => ({type: types.SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: types.SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: types.GET_SPECIFIC_COFFEE, body: data}),
		setNotFound = (bool) => ({type: types.SET_NOT_FOUND, body: bool});

export const types = {
	GET_SPECIFIC_COFFEE: 'aboutCoffee_reducer/GET_BEST_COFFEE',
	SET_IS_LOADING: 'aboutCoffee_reducer/SET_IS_LOADING',
	SET_IS_ERROR: 'aboutCoffee_reducer/SET_IS_ERROR',
	SET_NOT_FOUND: 'aboutCoffee_reducer/SET_NOT_FOUND',} 

export const getSpecificCoffee = (id, methodAPI = getSpecificCoffeeAPI) => (dispatch) => {
	dispatch(setNotFound(false))
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	return methodAPI(id)
		.then(res => {
			dispatch(setIsLoading(false))
			if(!res.specificCoffee){
				dispatch(setNotFound(true))
			}else{
				dispatch(setBestCoffee(res.specificCoffee))
			}
		})
		.catch(() => dispatch(setIsError(true)))
}

const initState = {
	specificCoffee: {},
	isLoading: false,
	isError: false,
	notFound: false
}

export const aboutCoffeeReducer = (state = initState, action) => {
	switch(action.type){
		case types.GET_SPECIFIC_COFFEE:
			return {...state, specificCoffee: action.body};
		case types.SET_IS_LOADING:
			return {...state, isLoading: action.body};
		case types.SET_IS_ERROR:
			return {...state, isError: action.body};
		case types.SET_NOT_FOUND:
			return {...state, notFound: action.body} 
		default: 
			return state;
	}
}
