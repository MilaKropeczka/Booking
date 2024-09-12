import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar';

const propTypes = {
	onSearch: PropTypes.func.isRequired,
};

function Header(props) {
	return (
		<header className={`${styles.header} container`}>
			<Searchbar onSearch={props.onSearch} />
		</header>
	);
}

Header.propTypes = propTypes;

export default Header;
