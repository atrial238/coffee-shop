import { useEffect, useState } from 'react';

import { CardCoffee } from '../../../../components';
import {wrapper, card_wrapper, card} from './OurBestSection.module.scss';
import {getBestCoffeeAPI} from '../../../../API/api';

const OurBestSection = () => {

	const [bestCoffee, setBestCoffee] = useState([]);
	
	useEffect(() => {
		getBestCoffeeAPI()
			.then(res => setBestCoffee(res))
	},[])

	const bestCoffeeElement = bestCoffee.map(el => <div key={el.id} className={card}><CardCoffee {...el}/></div>);

	return (
		<section className={wrapper}>
			<h2 className='subtitle'>Our best</h2>
			<div className={card_wrapper}>{bestCoffeeElement}</div>
		</section>
	)
}
export default OurBestSection;