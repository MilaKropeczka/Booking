import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/context/themeContext';
import AuthContext from './components/context/authContext';

class App extends Component {
	hotels = [
		{
			id: 1,
			name: 'Pod akacjami',
			city: 'Warszawa',
			rating: 8.3,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
			image: '',
		},
		{
			id: 2,
			name: 'Dębowy',
			city: 'Lublin',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
			image: '',
		},
	];
	state = {
		hotels: [],
		loading: true,
		theme: 'danger',
		isAuthenticated: false,
	};

	searchHandler(term) {
		const hotels = [...this.hotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		this.setState({ hotels });
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ hotels: this.hotels, loading: false });
		}, 1000);
	}

	changeTheme = () => {
		const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
		this.setState({ theme: newTheme });
	};

	render() {
		const header = (
			<Header>
				<Searchbar onSearch={(term) => this.searchHandler(term)} />
				<ThemeButton />
			</Header>
		);
		const content = this.state.loading ? (
			<LoadingIcon theme={this.changeTheme} />
		) : (
			<Hotels hotels={this.state.hotels} />
		);
		const menu = <Menu />;
		const footer = <Footer />;
		return (
			<AuthContext.Provider
				value={{
					isAuthenticated: this.state.isAuthenticated,
					login: () => this.setState({ isAuthenticated: true }),
					logout: () => this.setState({ isAuthenticated: false }),
				}}>
				<ThemeContext.Provider
					value={{
						color: this.state.theme,
						changeTheme: this.changeTheme,
					}}>
					<div className='App'>
						<Layout
							header={header}
							content={content}
							menu={menu}
							footer={footer}
						/>
					</div>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		);
	}
}

export default App;
