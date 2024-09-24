import React, { useEffect, useState } from 'react';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objects';
import { useParams } from 'react-router-dom';

export default function Hotel() {
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);

	const setTitle = useWebsiteTitle('Hotel - Dębowy');

	const fetchHotel = async () => {
		try {
			const res = await axios.get(`/hotels/${id}.json`);
			setHotel(res.data);
			setTitle('Hotel - ' + res.data.name);
		} catch (error) {
			console.log(error.response);
		}
		setLoading(false);

		setLoading(false);
	};

	useEffect(() => {
		fetchHotel();
	});

	if (loading) return <LoadingIcon />;

	return (
		<>
			<h1>Hotel: {hotel.name}</h1>
		</>
	);
}
