import { useEffect, useReducer, useCallback } from 'react';
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
import BestHotel from './components/Hotels/BestHotel/BestHotel';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import LastHotel from './components/Hotels/LastHotel/LastHotel';
import useStateStorage from './components/hooks/useStateStorage';
import useWebsiteTitle from './components/hooks/useWebsiteTitle';

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
			const theme = state.theme === 'danger' ? 'primary' : 'danger';
			return {
				...state,
				theme: theme,
			};
		case 'set-hotels':
			return { ...state, hotels: action.hotels };
		case 'set-loading':
			return { ...state, loading: action.hotels };
		case 'login':
			return { ...state, isAuthenticated: true };
		case 'logout':
			return { ...state, isAuthenticated: false };

		default:
			throw new Error('Nie ma takiej akcji: ' + action.type);
	}
};
const initialState = {
	theme: 'danger',
	hotels: [],
	loading: true,
	isAuthenticated: true,
};

function App() {
	const [lastHotel, setLastHotel] = useStateStorage(null);
	const [state, dispatch] = useReducer(reducer, initialState);
	useWebsiteTitle('Strona główna');

	const searchHandler = (term) => {
		const newHotels = [...backendHotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		dispatch({ type: 'set-hotels', hotels: newHotels });
	};

	const getBestHotel = useCallback(() => {
		//funkcja bedzie sie wykonywać tylko wtedy kiedy zmieni się state hoteli, optymalizuje (useMemo do wartosci/useCallback do funkcji)
		if (state.hotels.length < 2) {
			return null;
		} else {
			return state.hotels.sort((a, b) =>
				a.rating > b.rating ? -1 : 1
			)[0];
		}
	}, [state.hotels]);

	const openHotel = (hotel) => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'set-hotels', hotels: backendHotels });
			dispatch({ type: 'set-loading', loading: false });
		}, 1000);
	}, []);

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	);
	const content = state.loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{/* odmontowanie componentu */}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={state.hotels} />
		</>
	);
	const menu = <Menu />;
	const footer = <Footer />;
	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				login: () =>
					dispatch({
						type: 'login',
						isAuthenticated: true,
					}),
				logout: () =>
					dispatch({
						type: 'logout',
						isAuthenticated: false,
					}),
			}}>
			<ThemeContext.Provider
				value={{
					color: state.theme,
					changeTheme: () => dispatch({ type: 'change-theme' }),
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
