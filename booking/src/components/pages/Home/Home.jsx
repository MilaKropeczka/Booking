import { useCallback, useEffect, useState } from 'react';
import LastHotel from '../../Hotels/LastHotel/LastHotel';
import BestHotel from '../../Hotels/BestHotel/BestHotel';
import Hotels from '../../Hotels/Hotels';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import LoadingIcon from '../../UI/LoadingIcon/LoadingIcon';

const backendHotels = [
	{
		id: 1,
		name: 'Pod akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam quos reiciendis sequi magni possimus, perspiciatis dignissimos repellendus commodi cumque.',
		image: '',
	},
];

export default function Home() {
	useWebsiteTitle('Strona główna');
	const [lastHotel, setLastHotel] = useStateStorage(null);
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const getBestHotel = useCallback(() => {
		if (hotels.length < 2) {
			return null;
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	});

	const openHotel = (hotel) => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);

	useEffect(() => {
		setTimeout(() => {
			setHotels(backendHotels);
			setLoading(false);
		}, 1000);
	});

	if (loading) return <LoadingIcon />;

	return loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={hotels} />
		</>
	);
}
