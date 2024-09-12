import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';

class App extends Component {
	state = {
		hotels: [
			{
				name: 'Pod akacjami',
				city: 'Warszawa',
				rating: '8,3',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
				image: '',
			},
			{
				name: 'Dębowy',
				city: 'Lublin',
				rating: '8,8',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
				image: '',
			},
		],
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<Menu />
				<Hotels hotels={this.state} />
			</div>
		);
	}
}

export default App;
