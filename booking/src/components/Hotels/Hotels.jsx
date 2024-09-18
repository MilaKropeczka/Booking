import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import style from './Hotels.module.css';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

function Hotels(props) {
	return (
		<div className={`${style.container}`}>
			<h2 className={style.title}>Oferty: </h2>
			{props.hotels.map((hotel) => (
				<Hotel onOpen={props.onOpen} key={hotel.id} {...hotel} />
			))}
		</div>
	);
}

Hotels.propTypes = propTypes;

export default React.memo(Hotels);
