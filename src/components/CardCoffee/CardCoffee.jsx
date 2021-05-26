import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {wrapper, image, title_style, price_style, country_style, beige, coffee} from './CardCoffee.module.scss';

const CardCoffee = ({bgColor = 'beige', imgSrc, nameCoffee, weight, country, price, id}) => {
	
	return (
		<Link to={`/our_coffee/${id}`} className={wrapper + ' ' + (bgColor === 'beige' ? beige : null)}>
			<div className={image}>
				<img src={imgSrc} alt="coffee" />
			</div>
			<div className={title_style}>
				<span>{nameCoffee}</span><span className={coffee}>{` Coffee Beans ${weight} kg`}</span>
			</div>
			{country && <div className={country_style}>{country}</div>}
			<div className={price_style}>{price + '$'}</div>
		</Link>
	)
}

export default CardCoffee;

CardCoffee.propTypes = {
	bgColor: PropTypes.string,
	img: PropTypes.string,
	nameCoffe: PropTypes.string,
	weight: PropTypes.number,
	country: PropTypes.string,
	price: PropTypes.number,
	id: PropTypes.number
}