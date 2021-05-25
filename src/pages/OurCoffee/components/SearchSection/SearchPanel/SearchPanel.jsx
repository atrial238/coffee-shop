import {wrapper, looking_for} from './SearchPanel.module.scss';

const SearchPanel = () => {
	return (
		<div className={wrapper}>
			<div className={looking_for}>
				<label htmlFor="lookinFor">Lookin for</label>
				<input type="text" id='lookinFor'/>
			</div>
			<div></div>
		</div>

	)
}
export default SearchPanel;