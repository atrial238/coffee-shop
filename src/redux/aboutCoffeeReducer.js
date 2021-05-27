import {getSpecificCoffeeAPI} from '../API/api';

const setIsError = (bool) => ({type: SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: GET_SPECIFIC_COFFEE, body: data}),
		setNotFound = (bool) => ({type: SET_NOT_FOUND, body: bool});

const GET_SPECIFIC_COFFEE ='aboutCoffee_reducer/GET_BEST_COFFEE',
		SET_IS_LOADING ='aboutCoffee_reducer/SET_IS_LOADING',
		SET_IS_ERROR ='aboutCoffee_reducer/SET_IS_ERROR',
		SET_NOT_FOUND = 'aboutCoffee_reducer/SET_NOT_FOUND';


export const getSpecificCoffee = (id) => (dispatch) => {
	dispatch(setNotFound(false))
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	getSpecificCoffeeAPI(id)
		.then(res => {
			dispatch(setIsLoading(false))
			if(res === 'error'){
				dispatch(setIsError(true))
			}else if(!res.specificCoffee){
				dispatch(setNotFound(true))
			}else{
				dispatch(setIsError(false))
				dispatch(setBestCoffee(res.specificCoffee))
			}
		})
}

const initState = {
	specificCoffee: {},
	isLoading: false,
	isError: false,
	notFound: false
}

export const aboutCoffeeReducer = (state = initState, action) => {
	switch(action.type){
		case GET_SPECIFIC_COFFEE:
			return {...state, specificCoffee: action.body};
		case SET_IS_LOADING:
			return {...state, isLoading: action.body};
		case SET_IS_ERROR:
			return {...state, isError: action.body};
		case SET_NOT_FOUND:
			return {...state, notFound: action.body}
		default: 
			return state;
	}
}
