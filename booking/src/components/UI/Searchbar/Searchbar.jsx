import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/themeContext';

export default function Searchbar(props) {
	const [term, setTerm] = useState('');
	const theme = useContext(ThemeContext);

	const search = () => {
		props.onSearch(term);
	};

	return (
		<div className='d-flex'>
			<input
				value={term}
				onKeyDown={(e) => e.key === 'Enter' && search()}
				onChange={(e) => setTerm(e.target.value)}
				className='form-control'
				type='text'
				placeholder='Szukaj...'
			/>
			<button onClick={search} className={`ms-1 btn btn-${theme.color}`}>
				Szukaj
			</button>
		</div>
	);
}
