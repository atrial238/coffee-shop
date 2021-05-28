import {getBestCoffeeAPI} from '../API/api';

const setIsError = (bool) => ({type: types.SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: types.SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: types.GET_BEST_COFFEE, body: data});

export const types = {
	GET_BEST_COFFEE: 'home_reducer/GET_BEST_COFFEE',
	SET_IS_LOADING: 'home_reducer/SET_IS_LOADING',
	SET_IS_ERROR: 'home_reducer/SET_IS_ERROR',
}

export const getBestCoffee = (methodAPI = getBestCoffeeAPI) => (dispatch) =>  {
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	return methodAPI()
		.then(res => {
			dispatch(setIsLoading(false))
			dispatch(setBestCoffee(res.bestCoffee))
		})
		.catch(() => {
			dispatch(setIsLoading(false))
			dispatch(setIsError(true))
		})
}

const initState = {
	bestCoffe: [],
	isLoading: false,
	isError: false
}

export const homeReducer = (state = initState, action) => {
	switch(action.type){
		case types.GET_BEST_COFFEE:
			return {...state, bestCoffe: action.body}
		case types.SET_IS_LOADING:
			return {...state, isLoading: action.body}
		case types.SET_IS_ERROR:
			return {...state, isError: action.body}
		default: 
			return state;
	}
}