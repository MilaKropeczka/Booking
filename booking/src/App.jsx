import { useEffect, useReducer, useState } from 'react';
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

const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			return {
				...state,
				theme: state.theme === 'danger' ? 'primary' : 'danger',
			};
		case 'set-hotels':
			return { ...state, hotels: action.hotels };
		case 'set-loading':
			return { ...state, loading: action.hotels };
		case 'set-isauthenticated':
			return { ...state, isAuthenticated: action.isAuthenticated };

		default:
		// return: state
		// throw new Error('Nie ma takiej akcji: ', action.type);
	}
};

function App() {
	// const [hotels, setHotels] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [isAuthenticated, setIsAuthenticated] = useState(false);
	// const [theme, setTheme] = useState('danger');
	const initialState = {
		theme: 'danger',
		hotels: [],
		loading: true,
		isAuthenticated: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const changeTheme = () => {
		// const newTheme = theme === 'primary' ? 'danger' : 'primary';
		// setTheme(newTheme);
		dispatch({ type: 'change-theme' });
	};

	const searchHandler = (term) => {
		const newHotels = [...backendHotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		// setHotels(newHotels);
		dispatch({ type: 'set-hotels', hotels: newHotels });
	};

	useEffect(() => {
		setTimeout(() => {
			// setHotels(backendHotels);
			// setLoading(false);
			dispatch({ type: 'set-hotels', hotels: backendHotels });
			dispatch({ type: 'set-loading', loading: false });
		}, 1000);
	}, []);

	const header = (
		<Header>
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	);
	const content = state.loading ? (
		<LoadingIcon theme={changeTheme} />
	) : (
		<Hotels hotels={state.hotels} />
	);
	const menu = <Menu />;
	const footer = <Footer />;
	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				// login: () => setIsAuthenticated(true),
				login: () =>
					dispatch({
						type: 'set-isauthenticated',
						isAuthenticated: true,
					}),
				// logout: () => setIsAuthenticated(false),
				logout: () =>
					dispatch({
						type: 'set-isauthenticated',
						isAuthenticated: false,
					}),
			}}>
			<ThemeContext.Provider
				value={{
					color: state.theme,
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
