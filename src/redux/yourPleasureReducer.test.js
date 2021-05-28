import { yourPleasureReducer, getCoffeePleasure, types } from './yourPleasureReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const mockServiceCreator = (body, succeeds = true) => () =>
	new Promise((resolve, reject) => {
		setTimeout(() => (succeeds ? resolve(body) : reject('error')), 10);
});

describe('yourPleasureReducer', () => {
	const initState = {
		coffeePleasure: [],
		isLoading: false,
		isError: false
	}

	test('shoud return initial state', () => {
		const initialState = yourPleasureReducer(undefined, {});
		expect(initialState).toMatchSnapshot();
	});

	test('shoud set bestCoffee array', () => {
		const action =  {type: types.GET_PLEASURE_COFFEE, body: [{coffeeone: 'one'}, {coffeeTwo: 'two'}]};
		const state = yourPleasureReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isLoading true', () => {
		const action =  {type: types.SET_IS_LOADING, body: true};
		const state = yourPleasureReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isError true', () => {
		const action = {type: types.SET_IS_ERROR, body: true};
		const state = yourPleasureReducer(initState, action);
		expect(state).toMatchSnapshot();
	})
})

describe('getCoffeePleasure thunk', () => {
	let store;

	beforeEach(() => store = mockStore({}));
 
	it('dispatch action to store when getCoffeePleasure success', () => {
	
	const expectedActions = [
		{type: types.SET_IS_ERROR, body: false},
		{type: types.SET_IS_LOADING, body: true},
		{type: types.SET_IS_LOADING, body: false},
		{type: types.GET_PLEASURE_COFFEE, body: 'data'}
	]
	
	return store.dispatch(getCoffeePleasure(mockServiceCreator({coffeePleasure: 'data'})))
		.then(() => expect(store.getActions()).toEqual(expectedActions));
	});

	it('dispatch action to store when getCoffeePleasure failed', () => {
	
		const expectedActions = [
			{type: types.SET_IS_ERROR, body: false},
			{type: types.SET_IS_LOADING, body: true},
			{type: types.SET_IS_LOADING, body: false},
			{type: types.SET_IS_ERROR, body: true},
		]
		
		return store.dispatch(getCoffeePleasure(mockServiceCreator(null, false)))
			.then(() => expect(store.getActions()).toEqual(expectedActions))
			.catch(() => expect(store.getActions()).toEqual(expectedActions));
	});
 })