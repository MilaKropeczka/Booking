import React, { useContext, useState, useEffect, useRef } from 'react';
import ThemeContext from '../../context/themeContext';

export default function Searchbar(props) {
	const [term, setTerm] = useState('');
	const theme = useContext(ThemeContext);
	const inputRef = useRef(null); //pudełko

	const search = () => {
		props.onSearch(term);
	};

	const focusInput = () => {
		// document.querySelector('.search').focus(); //zwroci to samo VVVVVVVVV
		inputRef.current.focus(); //tu sprawdzam co AKTUALNIE jest w tym pudełku (input)
	};

	useEffect(() => {
		focusInput();
	}, [term]);

	return (
		<div className='d-flex'>
			<input
				ref={inputRef} //wrzucenie inputa do pudełka
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
