import { getBestCoffee, homeReducer, types } from './homeReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const mockServiceCreator = (body, succeeds = true) => () =>
	new Promise((resolve, reject) => {
		setTimeout(() => (succeeds ? resolve(body) : reject('error')), 10);
});

describe('homeReducer', () => {
	const initState = {
		bestCoffe: [],
		isLoading: false,
		isError: false
	}

	test('shoud return initial state', () => {
		const initialState = homeReducer(undefined, {});
		expect(initialState).toMatchSnapshot();
	});

	test('shoud set bestCoffee array', () => {
		const action =  {type: types.GET_BEST_COFFEE, body: [{coffeeone: 'one'}, {coffeeTwo: 'two'}]};
		const state = homeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isLoading true', () => {
		const action =  {type: types.SET_IS_LOADING, body: true};
		const state = homeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isError true', () => {
		const action = {type: types.SET_IS_ERROR, body: true};
		const state = homeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})
})

describe('getBestCoffee thunk', () => {
	let store;

	beforeEach(() => store = mockStore({}));
 
	it('dispatch action to store when getBestCoffee success', () => {
	
	const expectedActions = [
		{type: types.SET_IS_ERROR, body: false},
		{type: types.SET_IS_LOADING, body: true},
		{type: types.SET_IS_LOADING, body: false},
		{type: types.GET_BEST_COFFEE, body: 'data'}
	]
	
	return store.dispatch(getBestCoffee(mockServiceCreator({bestCoffee: 'data'})))
		.then(() => expect(store.getActions()).toEqual(expectedActions));
	});

	it('dispatch action to store when getBestCoffee failed', () => {
	
		const expectedActions = [
			{type: types.SET_IS_ERROR, body: false},
			{type: types.SET_IS_LOADING, body: true},
			{type: types.SET_IS_LOADING, body: false},
			{type: types.SET_IS_ERROR, body: true},
		]
		
		return store.dispatch(getBestCoffee(mockServiceCreator(null, false)))
			.then(() => expect(store.getActions()).toEqual(expectedActions))
			.catch(() => expect(store.getActions()).toEqual(expectedActions));
	});
 })