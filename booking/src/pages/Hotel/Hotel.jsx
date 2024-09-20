import React, { useEffect, useState } from 'react';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

export default function Hotel() {
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);

	const setTitle = useWebsiteTitle('Hotel - Dębowy');

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
		setTitle();
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
