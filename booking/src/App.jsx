import { useReducer, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Search from './pages/Search/Search';
import ProfileDetails from './pages/Profile/ProfileDetails/ProfileDetails';
import MyHotels from './pages/Profile/MyHotels/MyHotels';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import AuthenticatedRoute from './hoc/AuthenticatedRoute';
import ErrorBoundary from './hoc/ErrorBoundary';
import Register from './pages/Auth/Register/Register';
const Profile = lazy(() => import('./pages/Profile/Profile'));
const AddHotel = lazy(() =>
	import('./pages/Profile/MyHotels/AddHotel/AddHotel')
);
const EditHotel = lazy(() =>
	import('./pages/Profile/MyHotels/EditHotel/EditHotel')
);

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar />
			<ThemeButton />
		</Header>
	);
	const content = (
		<>
			<ErrorBoundary>
				<Routes>
					<Route
						path='/profil'
						element={
							<AuthenticatedRoute>
								<Profile />
							</AuthenticatedRoute>
						}>
						<Route path='' element={<ProfileDetails />} />
						<Route path='hotele' element={<MyHotels />}></Route>
					</Route>
					<Route
						path='profil/hotele/dodaj'
						element={
							<AuthenticatedRoute>
								<AddHotel />
							</AuthenticatedRoute>
						}
					/>
					<Route
						path='profil/hotele/edytuj/:id'
						element={
							<AuthenticatedRoute>
								<EditHotel />
							</AuthenticatedRoute>
						}
					/>
					<Route path='/hotele/:id' element={<Hotel />} />
					<Route path='/wyszukaj/:term?' element={<Search />} />
					<Route path='/zaloguj' element={<Login />} />
					<Route path='/rejestracja' element={<Register />} />
					<Route path='/' element={<Home />} end />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</ErrorBoundary>
		</>
	);
	const menu = <Menu />;
	const footer = <Footer />;
	return (
		<BrowserRouter>
			<AuthContext.Provider
				value={{
					user: state.user,
					login: (user) =>
						dispatch({
							type: 'login',
							user,
						}),
					logout: () =>
						dispatch({
							type: 'logout',
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
