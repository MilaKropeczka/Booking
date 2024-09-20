import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
	const { term } = useParams();
	const searchHandler = (term) => {
		// const newHotels = [...backendHotels].filter((x) =>
		// 	x.name.toLowerCase().includes(term.toLowerCase())
		// );
	};

	return (
		<div>
			<h2>Wyniki dla frazy "{term}":</h2>
		</div>
	);
}
