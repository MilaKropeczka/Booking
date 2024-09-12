import React, { useState } from 'react';

export default function Searchbar(props) {
	const [term, setTerm] = useState('');

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
			<button onClick={search} className='ms-1 btn btn-secondary'>
				Szukaj
			</button>
		</div>
	);
}
