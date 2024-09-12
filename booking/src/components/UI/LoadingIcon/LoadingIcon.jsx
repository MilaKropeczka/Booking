import React from 'react';

export default function LoadingIcon() {
	return (
		<div className='d-flex justify-content-center'>
			<div className='spinner-border' role='status'></div>
			<span className='sr-only m-1'>Ładowanie...</span>
		</div>
	);
}
