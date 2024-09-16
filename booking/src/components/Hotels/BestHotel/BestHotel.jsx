import React from 'react';

export default function BestHotel() {
	return (
		<div className='card bg-success text-white'>
			<div className='card-header'>Najlepsza oferta! </div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>Nazwa</h5> <p>Ocena: 8.8</p>
				</div>
				<a href='#section' className='btn btn-sm btn-light'>
					Pokaż
				</a>
			</div>
		</div>
	);
}
