import { CoffeeBeansTwo, Preloader } from '..';
import {wrapper,title} from './PreloaderPage.module.scss';
import bg from '../../assets/img/home/home_bg.jpg';

const PreloaderPage = () => {
	
	return (
		<div className={wrapper}>
			<h2 className={title}>Coffee house</h2>
			<Preloader color='white'/>
			<img src={bg} alt="background" />
		</div>
	)
}
export default PreloaderPage;
