import GridContainer from './GridContainer/GridContainer';
import SearchPanel from './SearchPanel/SearchPanel';
import {wrapper_search_panel, wrapper, wrapper_grid} from './SearchSection.module.scss';

const SearchSection = () => {
	return (
		<section className={wrapper}>
			<div className={wrapper_search_panel}><SearchPanel/></div>
			<div className={wrapper_grid}><GridContainer/></div>
		</section>
		)
}
export default SearchSection;