import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import {homeReducer} from './homeReducer';



const reducers = combineReducers({
	home: homeReducer,
	
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;