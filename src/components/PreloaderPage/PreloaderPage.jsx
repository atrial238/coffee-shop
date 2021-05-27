import { CoffeeBeansTwo, Preloader } from '..';
import {wrapper} from './PreloaderPage.module.scss';

const PreloaderPage = () => {
	return (
		<div className={wrapper}>
			<Preloader/>
		</div>
	)
}
export default PreloaderPage;
