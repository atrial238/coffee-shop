import { HeaderPleasure } from './components';
import {wrapper} from './Pleasure.module.scss';
import { About, Footer, GridContainer } from '../../components';

const Pleasure = () => {
	return (
		<div className={wrapper}>
			<HeaderPleasure/>
			<About/>
			<GridContainer/>
			<Footer/>
		</div>
	)
}

export default Pleasure;