import { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hashError: false,
	};

	static getDerivedStateFromError(error) {
		return { hashError: true, error };
	}

	componentDidCatch(error, errrInfo) {
		// console.log(`Error Boundary`);
		// console.log(error);
		// console.log('--------');
		// console.log(errrInfo);
	}

	render() {
		if (this.state.hashError) {
			return (
				<div className='alert alert-danger'>
					Wystąpił jakiś problem: {this.state.error.message}
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
