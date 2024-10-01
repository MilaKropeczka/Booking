import { useCallback, useEffect, useState } from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import BestHotel from '../..//components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objects';

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
	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = objectToArrayWithId(res.data).filter(
				(hotel) => Number(hotel.status) === 1
			);
			setHotels(newHotel);
		} catch (error) {
			console.log(error.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchHotels();
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
