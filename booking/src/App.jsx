import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/context/themeContext';
import AuthContext from './components/context/authContext';
import ReducerContext from './components/context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import { reducer, initialState } from './reducer';
import Home from './components/pages/Home/Home';
import Hotel from './components/pages/Hotel/Hotel';

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
	const [state, dispatch] = useReducer(reducer, initialState);

	const searchHandler = (term) => {
		const newHotels = [...backendHotels].filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		);
		dispatch({ type: 'set-hotels', hotels: newHotels });
	};

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	);
	const content = (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotele/:id' element={<Hotel />} />
			</Routes>
		</>
	);
	const menu = <Menu />;
	const footer = <Footer />;
	return (
		<BrowserRouter>
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
					<div className='App'></div>
					<ReducerContext.Provider
						value={{
							state: state,
							dispatch: dispatch,
						}}>
						<Layout
							header={header}
							content={content}
							menu={menu}
							footer={footer}
						/>
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
