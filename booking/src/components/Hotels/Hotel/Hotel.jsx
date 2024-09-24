import PropTypes from 'prop-types';
import style from './Hotel.module.css';
import hotelImg from '../../../assets/images/dsadsa.jpg';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default function Hotel(props) {
	const [auth] = useAuth();
	const theme = useContext(ThemeContext);

	const clickHandler = (e) => {
		if (props.onOpen) {
			props.onOpen(props);
		}
	};

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
								<h5>Ocena: {props.rating ?? 0}</h5>
								<Link
									to={`/hotele/${props.id}`}
									onClick={clickHandler}
									className={`btn btn-${theme.color} mt-2 px-5 float-end`}>
									Pokaż
								</Link>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={style.description}>{props.description}</p>
					</div>
				</div>
				{auth ? (
					<p className='mt-2'>Dostępność: {props.rooms} pokoje</p>
				) : (
					<p className='mt-2'>Dostępność: zaloguj</p>
				)}
			</div>
		</div>
	);
}

Hotel.propTypes = propTypes;
