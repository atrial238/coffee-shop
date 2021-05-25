import {wrapper, container, image, text, discription, country, price, subtitle} from './AboutSection.module.scss';
import {Divider} from '../../../../components';
import imgSrc from '../../../../assets/img/about_coffee/1.jpg';

const AboutSection = () => {
	return (
		<section className={wrapper}>
			<div className={container}>
				 <div className={image}>
					 <img src={imgSrc} alt="coffee" />
				 </div>
				 <div className={text}>
					 <h3 className={`subtitle ${subtitle}`}>About it</h3>
					 <Divider color='black'/>
					 <div className={country}><span>Country:</span> brasil</div>
					 <div className={discription}>
							 <span>Description: </span>
							 Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					 </div>
					 <div className={price}><span>Price:</span> 16.99$</div>
				 </div>
			</div>
		</section>
	)
}
export default AboutSection;