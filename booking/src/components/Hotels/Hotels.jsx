import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import style from './Hotels.module.css';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

class Hotels extends PureComponent {
	componentDidUpdate() {
		console.log('odswieza hotele');
	}

	render() {
		return (
			<div className={`${style.container}`}>
				<h2 className={style.title}>Oferty: </h2>
				{this.props.hotels.map((hotel) => (
					<Hotel key={hotel.id} {...hotel} />
				))}
			</div>
		);
	}
}

Hotels.propTypes = propTypes;

export default Hotels;
