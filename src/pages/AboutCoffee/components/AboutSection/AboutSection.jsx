import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import {connect} from 'react-redux';
import { useEffect } from 'react';

import {wrapper, container, image, text, discription, country_style, price_style, subtitle} from './AboutSection.module.scss';
import {Divider, Preloader} from '../../../../components';
import {getSpecificCoffee} from '../../../../redux/aboutCoffeeReducer';

const AboutSection = ({specificCoffee, isLoading, isError, getSpecificCoffee, notFound}) => {
	
	const {id} = useParams();
 
	const {imgSrc, country, price, description} = specificCoffee;

	useEffect(() => getSpecificCoffee(id), [id, getSpecificCoffee]);

	const containerElem = (
		<div className={container}>
			<div className={image}>
				<img src={imgSrc} alt="coffee" />
			</div>
			<div className={text}>
				<h3 className={`subtitle ${subtitle}`}>About it</h3>
				<Divider color='black'/>
				<div className={country_style}><span>Country:</span> {country ? country : 'brazil'}</div>
				<div className={discription}>
					<span>Description: </span>{description}
				</div>
				<div className={price_style}><span>Price:</span> {price}$</div>
			</div>
		</div>
	)

	return (
		<section className={wrapper}>
			{(isLoading && <Preloader color='#f0c884'/>) 
			|| (isError && <div className='error'>Oops! Something went wrong</div>) 
			|| (notFound && <div>nothing found</div>)
			|| containerElem}
		</section>
	)
}

const mapStateToProps = (state) => ({
	specificCoffee: state.aboutCoffee.specificCoffee,
	isLoading: state.aboutCoffee.isLoading,
	isError: state.aboutCoffee.isError,
	notFound: state.aboutCoffee.notFound
})

export default connect(mapStateToProps, {getSpecificCoffee})(AboutSection);

AboutSection.propTypes = {
	specificCoffee: PropTypes.shape({
		imgSrc: PropTypes.string,
		nameCoffee: PropTypes.string,
		weight: PropTypes.number,
		country: PropTypes.string,
		price: PropTypes.number,
		id: PropTypes.number,
		description: PropTypes.string
	}),
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	getSpecificCoffee: PropTypes.func,
	notFound: PropTypes.bool
}