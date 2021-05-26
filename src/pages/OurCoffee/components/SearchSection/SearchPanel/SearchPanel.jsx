import { useState } from 'react';
import {wrapper, looking_for, filter, active, button_search} from './SearchPanel.module.scss';

const SearchPanel = ({searchByCountry, countrySearch, isLoading, searchByName}) => {

	const [valueInput, setValueInput] = useState('');
	
	const handleClick = () => {
		searchByName(valueInput)
		setValueInput('')
	}
	return (
		<div className={wrapper}>
			<div className={looking_for}>
					<label htmlFor="lookinFor">Lookin for</label>
					<input 
						type="text" 
						id='lookinFor' 
						value={valueInput} 
						onChange={(e) => setValueInput(e.target.value)} 
						placeholder='start typing here...'
					/>
					<button className={button_search} onClick={handleClick}></button>
			</div>

			<div className={filter}>
				<span>Or filter</span>

				<button 
					disabled={isLoading} 
					className={countrySearch === 'Brazil' ? active : null} 
					onClick={()=> searchByCountry('Brazil')}
					>
						Brazil
				</button>

				<button 
					disabled={isLoading}
					className={countrySearch === 'Kenya' ? active : null}  
					onClick={()=> searchByCountry('Kenya')}
					>
						Kenya
				</button>

				<button 
					disabled={isLoading} 
					className={countrySearch === 'Columbia' ? active : null} 
					onClick={()=> searchByCountry('Columbia')}
				>
					Columbia
				</button>
			</div>
		</div>

	)
}
export default SearchPanel;