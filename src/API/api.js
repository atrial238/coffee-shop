import {bestCoffee, allCoffee} from '../API/fakeData/fakeData';


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

//get best coffee for home page
export const getBestCoffeeAPI = () => {
	const data = {status: 'ok', bestCoffee};
	return sleep(data);
}

//get specific coffee for AboutCoffee page
export const getSpecificCoffeeAPI = (id) => {
	const data = {status: 'ok', specificCoffee: allCoffee.find(el => el.id === +id)}
	return sleep(data);
}

//get all coffee by pagination
export const getAllCoffeeAPI = (page = 0, limit = 6) => {
	if(page < 0) page = 0;
	const firstItem = page * limit;
	const lastItem = page * limit + (limit - 1);
	let coffeePerPage = allCoffee.filter((_, index) => firstItem <= index && index <= lastItem)
	if(!coffeePerPage.length) coffeePerPage = 'no items found'
	const data = {status: 'ok', coffeePerPage, allItems: allCoffee.length}
	
	return sleep(data);
}