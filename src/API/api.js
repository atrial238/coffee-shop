import {bestCoffee, allCoffee, coffeePleasure} from '../API/fakeData/fakeData';

//emulation of a request to the server
const sleep = (data) => {
	return new Promise((resolve, rej) => {
		setTimeout(() => {
			// rej()
			resolve(data);
		}, 1000)
	})
	.then(res => res.status === 'ok' ? res : 'error')
	.catch(() => 'error')
}

//this is boudary item for pagination
const getBoundaryItems = (page, limit) => {
	const firstItem = page * limit;
	const lastItem = page * limit + (limit - 1);
	return [firstItem, lastItem];
}

//get best coffee for home page
export const getBestCoffeeAPI = () => {
	const data = {status: 'ok', bestCoffee};
	return sleep(data);
}

//get coffee for pleasure page
export const getCoffeePleasureAPI = () => {
	const data = {status: 'ok', coffeePleasure};
	return sleep(data);
}

//get specific coffee for AboutCoffee page
export const getSpecificCoffeeAPI = (id) => {
	const data = {status: 'ok', specificCoffee: allCoffee.find(el => el.id === +id)}
	return sleep(data);
}

//get all coffee by pagination
export const getAllCoffeeAPI = (page = 0, country, input, limit = 6) => {
	if(page < 0) page = 0;
	const [firstItem, lastItem] = getBoundaryItems(page, limit);
	const coffeePerPage = allCoffee.filter((_, index) => firstItem <= index && index <= lastItem);
	const data = {status: 'ok', coffeePerPage, allItems: allCoffee.length};
	return sleep(data);
}

//get coffee filtered by country
export const getCoffeeByCountryAPI = (page = 0, country, input, limit = 6) => {
	if(page < 0) page = 0;
	const [firstItem, lastItem] = getBoundaryItems(page, limit);
	const coffeePerCountry = allCoffee.filter(el => el.country === country);
	const coffeePerPage = coffeePerCountry.filter((_, index) => firstItem <= index && index <= lastItem)
	const data = {status: 'ok', coffeePerPage, allItems: coffeePerCountry.length}
	return sleep(data);
}

//get coffee filterd by name 
export const getCoffeeByNameAPI = (page = 0, coutry, input, limit = 6) => {
	if(page < 0) page = 0;
	const [firstItem, lastItem] = getBoundaryItems(page, limit);
	const coffeePerName = allCoffee.filter(el => el.nameCoffee.includes(input));
	const coffeePerPage = coffeePerName.filter((_, index) => firstItem <= index && index <= lastItem)
	const data = {status: 'ok', coffeePerPage, allItems: coffeePerName.length}
	return sleep(data);
}