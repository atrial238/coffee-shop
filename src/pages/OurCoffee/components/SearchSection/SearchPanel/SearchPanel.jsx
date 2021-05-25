import {wrapper, looking_for, filter, button} from './SearchPanel.module.scss';

const SearchPanel = () => {
	return (
		<div className={wrapper}>
			<div className={looking_for}>
				<label htmlFor="lookinFor">Lookin for</label>
				<input type="text" id='lookinFor' placeholder='start typing here...'/>
			</div>
			<div className={filter}>
				<span>Or filter</span>
				<button className={button}>Brazil</button>
				<button className={button}>Kenya</button>
				<button className={button}>Columbia</button>
			</div>
		</div>

	)
}
export default SearchPanel;