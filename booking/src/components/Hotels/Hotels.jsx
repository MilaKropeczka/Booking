import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import style from './Hotels.module.css';
import { useEffect } from 'react';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

function Hotels(props) {
	useEffect(() => {
		console.log('object');
	}); //calkowite usuniecie drugiego parametru pokazuje odswiezanie komponentu
	return (
		<div className={`${style.container}`}>
			<h2 className={style.title}>Oferty: </h2>
			{props.hotels.map((hotel) => (
				<Hotel key={hotel.id} {...hotel} />
			))}
		</div>
	);
}

Hotels.propTypes = propTypes;

export default React.memo(Hotels);
