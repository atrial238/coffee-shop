import imageSrc from './imgForFakeData';

const [SolimoImg, Presto, Aromistico] = imageSrc;

const description = 'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export const bestCoffee = [
	{
		imgSrc: SolimoImg,
		nameCoffee: 'Solimo',
		weight: 1,
		country: null,
		price: 10.37,
		id: 0,
	},
	{
		imgSrc: Presto,
		nameCoffee: 'Presto',
		weight: 1,
		country: null,
		price: 15.99,
		id: 1
	},
	{
		imgSrc: Aromistico,
		nameCoffee: 'Aromistico',
		weight: 1,
		country: null,
		price: 6.99,
		id: 3
	}
]

export const allCoffee = [
	{
		imgSrc: SolimoImg,
		nameCoffee: 'Solimo',
		weight: 1,
		country: null,
		price: 10.37,
		id: 0,
		description
	},
	{
		imgSrc: Presto,
		nameCoffee: 'Presto',
		weight: 1,
		country: null,
		price: 15.99,
		id: 1,
		description
	},
	{
		imgSrc: Aromistico,
		nameCoffee: 'Aromistico',
		weight: 1,
		country: null,
		price: 6.99,
		id: 3,
		description
	}
]