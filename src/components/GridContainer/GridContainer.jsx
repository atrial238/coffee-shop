import { CardCoffee } from '../../components';
import {wrapper} from './GridContainer.module.scss';

const GridContainer = () => {
	return (
		<div className={wrapper}>
			<CardCoffee bgColor='white'/>
			<CardCoffee bgColor='white'/>
			<CardCoffee bgColor='white'/>
			<CardCoffee bgColor='white'/>
			<CardCoffee bgColor='white'/>
			<CardCoffee bgColor='white'/>
		</div>

	)
}
export default GridContainer;