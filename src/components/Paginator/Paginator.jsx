import {disabled} from './Paginator.module.scss';

const Paginator = ({setPage, isLoading, isFirstPage, isLastPage}) => {
	
	return (
		<>
			<button 
				disabled={isLoading || isFirstPage} 
				onClick={() => setPage(-1)}
				className={(isFirstPage && disabled) || (isLoading && disabled)}
				>
					Previous
			</button>

			<button 
				disabled={isLoading || isLastPage} 
				onClick={() => setPage(1)} 
				className={(isLastPage && disabled) || (isLoading && disabled)}
			>
				Next
			</button>
		</>
	)
}

export default Paginator;