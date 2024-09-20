import style from './Menu.module.css';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
	const [auth, setAuth] = useAuth();

	const login = (e) => {
		e.preventDefault();
		setAuth(true);
	};

	const logout = (e) => {
		e.preventDefault();
		setAuth(false);
	};
	return (
		<div
			className={`${style.menuContainer} breadcrumb p-3 bg-secondary-subtle border border-dark-subtle rounded-2`}>
			<ul className={`${style.menu}`}>
				<li className={`${style.menuItem}`}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? style.menuItemActive : ''
						}>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={style.menuItem}>
							<NavLink
								to='/profil'
								className={({ isActive }) =>
									isActive ? style.menuItemActive : ''
								}>
								Mój profil
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<a href='#section' onClick={logout}>
								Wyloguj
							</a>
						</li>
					</>
				) : (
					<li className={style.menuItem}>
						<a href='#section' onClick={login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Menu;
