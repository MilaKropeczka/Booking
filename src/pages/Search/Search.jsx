import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { objectToArrayWithId } from '../../helpers/objects';
import Hotels from '../../components/Hotels/Hotels';
import axios from '../../axios';

export default function Search() {
	const [hotels, setHotels] = useState([]);
	const [setLoading] = useState(true);
	const { term } = useParams();

	const search = async (searchTerm) => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = objectToArrayWithId(res.data).filter((hotel) =>
				hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setHotels(newHotel);
		} catch (error) {
			console.log(error.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (term) {
			search(term);
		}
	}, [term]);

	return (
		<div>
			<h2>Wyniki dla frazy "{term}":</h2>
			<Hotels hotels={hotels} />
		</div>
	);
}
