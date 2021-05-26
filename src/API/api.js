import {bestCoffee} from '../API/fakeData/fakeData';

export const getBestCoffeeAPI = () => {
	return new Promise((resolve, rej) => {
		setTimeout(() => {
			const data = {status: 'ok', bestCoffee};
			// rej()
			resolve(data);
		}, 3000)
	})
	.then(res => res.status === 'ok' ? res.bestCoffee : 'error')
	.catch(() => 'error')
}