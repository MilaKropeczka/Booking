import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import LoadingIcon from '../../UI/LoadingIcon/LoadingIcon';

export default function Hotel() {
	// const params = useParams(); //dane z linku, np params.id
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchHotel = () => {
		setHotel({
			id: 2,
			name: 'Dębowy',
			city: 'Lublin',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
			image: '',
		});
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			fetchHotel();
		}, 1000);
	});

	if (loading) return <LoadingIcon />;

	return (
		<>
			<h1>Hotel: {hotel.name}</h1>
		</>
	);
}
