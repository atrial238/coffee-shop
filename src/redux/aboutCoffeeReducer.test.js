import { getSpecificCoffee, aboutCoffeeReducer, types } from './aboutCoffeeReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const mockServiceCreator = (body, succeeds = true) => () =>
	new Promise((resolve, reject) => {
		setTimeout(() => (succeeds ? resolve(body) : reject('error')), 10);
});

describe('aboutCoffeeReducer', () => {
	const initState = {
		specificCoffee: {},
		isLoading: false,
		isError: false,
		notFound: false
	}

	test('shoud return initial state', () => {
		const initialState = aboutCoffeeReducer(undefined, {});
		expect(initialState).toMatchSnapshot();
	});

	test('shoud set bestCoffee array', () => {
		const action =  {type: types.GET_SPECIFIC_COFFEE, body: {coffeeone: 'one'}};
		const state = aboutCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isLoading true', () => {
		const action =  {type: types.SET_IS_LOADING, body: true};
		const state = aboutCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set isError true', () => {
		const action = {type: types.SET_IS_ERROR, body: true};
		const state = aboutCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('shoud set notFound true', () => {
		const action = {type: types.SET_NOT_FOUND, body: true};
		const state = aboutCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})
})

describe('getBestCoffee thunk', () => {
	let store;

	beforeEach(() => store = mockStore({}));
	
	it('dispatch action to store when getSpecificCoffee success', () => {
	
	const expectedActions = [
		{type: types.SET_NOT_FOUND, body: false},
		{type: types.SET_IS_ERROR, body: false},
		{type: types.SET_IS_LOADING, body: true},
		{type: types.SET_IS_LOADING, body: false},
		{type: types.GET_SPECIFIC_COFFEE, body: 'data'}
	]
	
		return store.dispatch(getSpecificCoffee(1, mockServiceCreator({specificCoffee: 'data'})))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	});

	it('dispatch action to store when getSpecificCoffee failed', () => {
	
		const expectedActions = [
			{type: types.SET_NOT_FOUND, body: false},
			{type: types.SET_IS_ERROR, body: false},
			{type: types.SET_IS_LOADING, body: true},
			{type: types.SET_IS_ERROR, body: true},
		]
		
		return store.dispatch(getSpecificCoffee(1, mockServiceCreator(null, false)))
			.then(() => expect(store.getActions()).toEqual(expectedActions))
			.catch(() => expect(store.getActions()).toEqual(expectedActions));
	});
 })