import React, { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

export default function Footer() {
	const theme = useContext(ThemeContext);
	return (
		<div className={`text-center m-3 text-${theme.color}`}>
			Noclegi 2024
		</div>
	);
}
