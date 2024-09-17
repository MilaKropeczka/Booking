import React from 'react';

export default function LastHotel(props) {
	if (!props) return null;

	return (
		<div className='card bg-light'>
			<div className='card-header'>
				Ostatio oglądałeś ten hotel. Wciąż zainteresowany?
			</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{props.name}</h5>{' '}
					<span className='badge bg-light text-dark'>
						{props.city}
					</span>
				</div>
				<div
					style={{ width: '100px' }}
					className='ms-auto d-flex justify-content-between'>
					<a href='#section' className='btn btn-sm btn-dark'>
						Tak!
					</a>
					<button
						href='#section'
						onClick={props.onRemove}
						className='btn btn-sm btn-dark'>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
}
