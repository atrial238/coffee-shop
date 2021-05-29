const Preloader = ({color= '#f0c884'}) => {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" 
			xmlnsXlink="http://www.w3.org/1999/xlink" 
			style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} 
			width="200px" 
			height="200px" 
			viewBox="0 0 100 100" 
			preserveAspectRatio="xMidYMid">
				<path d="M15 50A35 35 0 0 0 85 50A35 38.1 0 0 1 15 50" fill={color} stroke="none">
					<animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.55;360 50 51.55"></animateTransform>
				</path>
			</svg>
		</div>
	)
}

export default Preloader;