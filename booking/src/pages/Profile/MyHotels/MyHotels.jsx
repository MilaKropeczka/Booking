import React from 'react';
import { Link } from 'react-router-dom';

export default function MyHotels() {
	return (
		<div>
			<p>Nie masz jeszcze żadnego hotelu.</p>
			<Link to='dodaj' className='btn btn-primary'>
				Dodaj hotel
			</Link>
		</div>
	);
}
