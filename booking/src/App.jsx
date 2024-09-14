import { useEffect, useState } from 'react';
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

const backendHotels = [
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

function App() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [theme, setTheme] = useState('danger');
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const changeTheme = () => {
		const newTheme = theme === 'primary' ? 'danger' : 'primary';
		setTheme(newTheme);
	};

	const searchHandler = (term) => {
		const newHotels = [...backendHotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		setHotels(newHotels);
	};

	useEffect(() => {
		setTimeout(() => {
			setHotels(backendHotels);
			setLoading(false);
		}, 1000);
	}, []);

	const header = (
		<Header>
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	);
	const content = loading ? (
		<LoadingIcon theme={changeTheme} />
	) : (
		<Hotels hotels={hotels} />
	);
	const menu = <Menu />;
	const footer = <Footer />;
	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				login: () => setIsAuthenticated(true),
				logout: () => setIsAuthenticated(false),
			}}>
			<ThemeContext.Provider
				value={{
					color: theme,
					changeTheme: changeTheme,
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

export default App;
