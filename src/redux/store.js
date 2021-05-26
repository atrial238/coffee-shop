import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import {homeReducer} from './homeReducer';
import {aboutCoffeeReducer} from './aboutCoffeeReducer';
import { ourCoffeeReducer } from './ourCoffeeReducer';

const reducers = combineReducers({
	home: homeReducer,
	aboutCoffee: aboutCoffeeReducer,
	ourCoffee: ourCoffeeReducer
	
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;