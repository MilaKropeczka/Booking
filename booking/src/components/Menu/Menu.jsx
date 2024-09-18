import style from './Menu.module.css';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

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
					<Link to='/'>Home</Link>
				</li>
				<li className={style.menuItem}>
					{' '}
					{auth ? (
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
