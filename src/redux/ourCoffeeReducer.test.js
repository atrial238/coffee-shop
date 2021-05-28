import { ourCoffeeReducer, types, initState, searchByCountry, searchByName, resetFilter} from './ourCoffeeReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
 
const mockStore = configureMockStore([thunk]);



describe('ourCoffeeReducer', () => {
	
	test('should return initial state', () => {
		const initialState = ourCoffeeReducer(undefined, {});
		expect(initialState).toMatchSnapshot();
	});

	test('should set coffePerPage array', () => {
		const action =  {type: types.GET_COFFEE, body: [{coffeeone: 'one'}, {coffeeTwo: 'two'}]};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set isLoading true', () => {
		const action =  {type: types.SET_IS_LOADING, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set isError true', () => {
		const action = {type: types.SET_IS_ERROR, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should decrease on increasing number of page', () => {
		const action = {type: types.SET_PAGE, body: 1};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set first page true', () => {
		const action = {type: types.SET_IS_FIRST_PAGE, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set last page true', () => {
		const action = {type: types.SET_IS_LAST_PAGE, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set isSearchAllCoffee true', () => {
		const action = {type: types.SET_IS_SEARCH_ALL_COFFEE, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set isSearchByName true', () => {
		const action = {type: types.SET_IS_SEARCH_BY_NAME, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set isSearchByCountry true', () => {
		const action = {type: types.SET_IS_SEARCH_BY_COUNTRY, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set country for search', () => {
		const action = {type: types.SET_COUNTRY, body: 'country'};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set nameCoffee for search', () => {
		const action = {type: types.SET_NAME_COFFEE, body: 'someName'};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set page zero', () => {
		const action = {type: types.SET_PAGE_ZERO};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

	test('should set is any coffee found true', () => {
		const action = {type: types.SET_IS_ITEM_FOUND, body: true};
		const state = ourCoffeeReducer(initState, action);
		expect(state).toMatchSnapshot();
	})

})

describe('thunks ourCoffeeReducer', () => {
	let store;

	beforeEach(() => store = mockStore({}));

	it('dispatch action to store for searchByCountry thunk', () => {
		const expectedActions = [
			{type: types.SET_IS_SEARCH_BY_COUNTRY, body: true},
			{type: types.SET_IS_SEARCH_ALL_COFFEE, body: false},
			{type: types.SET_IS_SEARCH_BY_NAME, body: false},
			{type: types.SET_COUNTRY, body: 'country'},
			{type: types.SET_PAGE_ZERO},
		]
	
		store.dispatch(searchByCountry('country'))
		expect(store.getActions()).toEqual(expectedActions);
	});

	it('dispatch action to store for searchByName thunk', () => {

		const expectedActions = [
			{type: types.SET_IS_SEARCH_BY_COUNTRY, body: false},
			{type: types.SET_IS_SEARCH_ALL_COFFEE, body: false},
			{type: types.SET_IS_SEARCH_BY_NAME, body: true},
			{type: types.SET_PAGE_ZERO},
			{type: types.SET_COUNTRY, body: ''},
			{type: types.SET_NAME_COFFEE, body: 'someName'},
		]

		store.dispatch(searchByName('someName'));
		expect(store.getActions()).toEqual(expectedActions);
	});

	it('dispatch action to store for resetFilter thunk', () => {

		const expectedActions = [
			{type: types.SET_IS_SEARCH_BY_COUNTRY, body: false},
			{type: types.SET_IS_SEARCH_ALL_COFFEE, body: true},
			{type: types.SET_IS_SEARCH_BY_NAME, body: false},
			{type: types.SET_PAGE_ZERO},
			{type: types.SET_COUNTRY, body: ''},
			{type: types.SET_NAME_COFFEE, body: ''},
		]

		store.dispatch(resetFilter('someName'));
		expect(store.getActions()).toEqual(expectedActions);
	});
 })
 