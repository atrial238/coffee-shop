import {getCoffeePleasureAPI} from '../API/api';

const setIsError = (bool) => ({type: SET_IS_ERROR, body: bool}),
		setIsLoading = (bool) => ({type: SET_IS_LOADING, body: bool}),
		setPleasureCoffee = (data) => ({type: GET_PLEASURE_COFFEE, body: data});

const GET_PLEASURE_COFFEE ='home_reducer/GET_PLEASURE_COFFEE',
		SET_IS_LOADING ='home_reducer/SET_IS_LOADING',
		SET_IS_ERROR ='home_reducer/SET_IS_ERROR';


export const getCoffeePleasure = () => (dispatch) =>  {
	dispatch(setIsError(false))
	dispatch(setIsLoading(true))
	getCoffeePleasureAPI()
		.then(res => {
			dispatch(setIsLoading(false))
			if(res === 'error'){
				dispatch(setIsError(true))
			}else{
				dispatch(setIsError(false))
				dispatch(setPleasureCoffee(res.coffeePleasure))
			}
		})
}

const initState = {
	coffeePleasure: [],
	isLoading: false,
	isError: false
}

export const yourPleasureReducer = (state = initState, action) => {
	switch(action.type){
		case GET_PLEASURE_COFFEE:
			return {...state, coffeePleasure: action.body}
		case SET_IS_LOADING:
			return {...state, isLoading: action.body}
		case SET_IS_ERROR:
			return {...state, isError: action.body}
		default: 
			return state;
	}
}