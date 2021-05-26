import PropTypes from 'prop-types';
import {wrapper, image, title_style, price_style ,country_style, beige, coffee} from './CardCoffee.module.scss';
import coffeeImg from '../../assets/img/home/1.jpg';
import { Link } from 'react-router-dom';

const CardCoffee = ({bgColor = 'beige', imgSrc = coffeeImg, nameCoffee='Solimo', weight = 1, country = null, price = 10.73}) => {
	console.log(nameCoffee)
	return (
		<Link to={`/our_coffee/${nameCoffee.toLowerCase()}`} className={wrapper + ' ' + (bgColor === 'beige' ? beige : null)}>
			<div className={image}>
				<img src={imgSrc} alt="coffee" />
			</div>
			<div className={title_style}><span>{nameCoffee}</span><span className={coffee}>{` Coffee Beans ${weight} kg`}</span></div>
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
	price: PropTypes.number
}