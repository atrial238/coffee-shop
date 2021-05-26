import { CardCoffee } from '../../components';
import {wrapper} from './GridContainer.module.scss';

const GridContainer = ({coffeePerPage}) => {
	
	
	const cardCoffeeElem = coffeePerPage.map(el => <CardCoffee key={el.id} bgColor='white' {...el}/>);

	return <div className={wrapper}>{cardCoffeeElem}</div>
}
export default GridContainer;