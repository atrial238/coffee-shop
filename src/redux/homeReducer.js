import {getBestCoffeeAPI} from '../API/api';

const setIsError = (bool) => ({type: SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: SET_IS_LOADING, body: bool}),
		setBestCoffee = (data) => ({type: GET_BEST_COFFEE, body: data});

const GET_BEST_COFFEE ='home_reducer/GET_BEST_COFFEE',
		SET_IS_LOADING ='home_reducer/SET_IS_LOADING',
		SET_IS_ERROR ='home_reducer/SET_IS_ERROR';


export const getBestCoffee = () => (dispatch) =>  {
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	getBestCoffeeAPI()
		.then(res => {
			dispatch(setIsLoading(false))
			if(res === 'error'){
				dispatch(setIsError(true))
			}else{
				dispatch(setIsError(false))
				dispatch(setBestCoffee(res.bestCoffee))
			}
		})
}

const initState = {
	bestCoffe: [],
	isLoading: false,
	isError: false
}

export const homeReducer = (state = initState, action) => {
	switch(action.type){
		case GET_BEST_COFFEE:
			return {...state, bestCoffe: action.body}
		case SET_IS_LOADING:
			return {...state, isLoading: action.body}
		case SET_IS_ERROR:
			return {...state, isError: action.body}
		default: 
			return state;
	}
}