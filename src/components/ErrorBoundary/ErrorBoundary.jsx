import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null};
	}
	
	componentDidCatch(error) {this.setState({error })};
	
	render() {
		return this.state.error 
			? <h4 className='error'>Oops! Something went wrong.</h4>
			: this.props.children;
	}
 }