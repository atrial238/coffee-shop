import {bestCoffee, allCoffee} from '../API/fakeData/fakeData';

//get best coffee for home page
export const getBestCoffeeAPI = () => {
	const data = {status: 'ok', bestCoffee};
	return new Promise((resolve, rej) => {
		setTimeout(() => {
			// rej()
			resolve(data);
		}, 1000)
	})
	.then(res => res.status === 'ok' ? res.bestCoffee : 'error')
	.catch(() => 'error')
}

//get specific coffee for AboutCoffee page
export const getSpecificCoffeeAPI = (id) => {
	const data = {status: 'ok', specificCoffee: allCoffee.find(el => el.id === +id)}
	return new Promise((resolve, rej) => {
		setTimeout(() => {
			// rej()
			resolve(data);
		}, 1000)
	})
	.then(res => res.status === 'ok' ? res.specificCoffee : 'error')
	.catch(() => 'error')
}