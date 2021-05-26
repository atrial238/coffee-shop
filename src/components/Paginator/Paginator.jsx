import {disabled, button} from './Paginator.module.scss';

const Paginator = ({setPage, isLoading, isFirstPage, isLastPage}) => {
	
	return (
		<>
			<button 
				disabled={isLoading || isFirstPage} 
				onClick={() => setPage(-1)}
				className={button + ' ' + (isFirstPage && disabled) || (isLoading && disabled)}
				>
					Previous
			</button>

			<button 
				disabled={isLoading || isLastPage} 
				onClick={() => setPage(1)} 
				className={button + ' ' + (isLastPage && disabled) || (isLoading && disabled)}
			>
				Next
			</button>
		</>
	)
}

export default Paginator;