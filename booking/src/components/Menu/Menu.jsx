import React, { useContext } from 'react';
import style from './Menu.module.css';
import AuthContext from '../../components/context/authContext';

function Menu() {
	const auth = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		auth.login();
	};

	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};
	return (
		<div
			className={`${style.menuContainer} breadcrumb p-3 bg-secondary-subtle border border-dark-subtle rounded-2`}>
			<ul className={`${style.menu}`}>
				<li className={`${style.menuItem}`}>
					<a href='#section'>Home</a>
				</li>
				<li className={style.menuItem}>
					{' '}
					{auth.isAuthenticated ? (
						<a href='#section' onClick={logout}>
							Wyloguj
						</a>
					) : (
						<a href='#section' onClick={login}>
							Zaloguj
						</a>
					)}
				</li>
			</ul>
		</div>
	);
}

export default Menu;
