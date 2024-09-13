import PropTypes from 'prop-types';
import style from './Hotel.module.css';
import hotelImg from '../../assets/images/dsadsa.jpg';
import ThemeContext from '../../context/themeContext';
import { useContext } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
};

export default function Hotel(props) {
	const theme = useContext(ThemeContext);
	return (
		<div className={`${style.hotel} card`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						<img
							src={hotelImg}
							alt=''
							className='img-fluid img-thumbnail'
						/>
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={style.title}>{props.name}</p>
								<span className='badge bg-light text-dark'>
									{props.city}
								</span>
							</div>
							<div className='col'>
								<h5>Ocena: {props.rating}</h5>
								<a
									href='#section'
									className={`btn btn-${theme.color} mt-2 px-5 float-end`}>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={style.description}>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Hotel.propTypes = propTypes;
