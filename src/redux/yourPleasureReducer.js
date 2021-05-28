import {getCoffeePleasureAPI} from '../API/api';

const setIsError = (bool) => ({type: types.SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: types.SET_IS_LOADING, body: bool}),
		setPleasureCoffee = (data) => ({type: types.GET_PLEASURE_COFFEE, body: data});

export const types = {
	GET_PLEASURE_COFFEE: 'home_reducer/GET_PLEASURE_COFFEE',
	SET_IS_LOADING: 'home_reducer/SET_IS_LOADING',
	SET_IS_ERROR: 'home_reducer/SET_IS_ERROR',
} 


export const getCoffeePleasure = (methodAPI = getCoffeePleasureAPI) => (dispatch) =>  {
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	return methodAPI()
		.then(res => {
			dispatch(setIsLoading(false))
			dispatch(setPleasureCoffee(res.coffeePleasure))
		})
		.catch(() => {
			dispatch(setIsLoading(false))
			dispatch(setIsError(true))
		})
}

const initState = {
	coffeePleasure: [],
	isLoading: false,
	isError: false
}

export const yourPleasureReducer = (state = initState, action) => {
	switch(action.type){
		case types.GET_PLEASURE_COFFEE:
			return {...state, coffeePleasure: action.body}
		case types.SET_IS_LOADING:
			return {...state, isLoading: action.body}
		case types.SET_IS_ERROR:
			return {...state, isError: action.body}
		default: 
			return state;
	}
}