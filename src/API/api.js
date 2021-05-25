import {bestCoffee} from '../API/fakeData/fakeData';

export const getBestCoffeeAPI = () => {
	return new Promise((resolve, rej) => {
		setTimeout(() => {
			const data = {status: 'ok',bestCoffee};
			resolve(data);
		}, 200)
	})
	.then(res => res.status === 'ok' && res.bestCoffee)
	.catch(() => 'error')
}