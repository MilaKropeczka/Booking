import React from 'react';

export default function LastHotel() {
	return (
		<div className='card bg-light'>
			<div className='card-header'>
				Ostatio oglądałeś ten hotel. Wciąż zainteresowany?
			</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					{/* <h5 className='card-title'>{hotel.name}</h5>{' '} */}
					{/* <p>Ocena: {hotel.rating}</p> */}
				</div>
				<a href='#section' className='btn btn-sm btn-light'>
					Tak!
				</a>
				<a href='#section' className='btn btn-sm btn-light'>
					Nie
				</a>
			</div>
		</div>
	);
}
