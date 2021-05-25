import { CardCoffee } from '../../components';
import {wrapper, card_wrapper, card} from './OurBestSection.module.scss';
import twoImage from '../../assets/img/home/2.jpg';

const OurBestSection = () => {
	return (
		<section className={wrapper}>
			<h2 className='subtitle'>Our best</h2>
			<div className={card_wrapper}>
				<div className={card}><CardCoffee/></div>
				<div className={card}><CardCoffee/></div>
				<div className={card}><CardCoffee img={twoImage}/></div>
			</div>
			
		</section>
	)
}
export default OurBestSection;