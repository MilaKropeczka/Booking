import React from 'react';
import style from './Hotel.module.css';
import hotelImg from '../../assets/images/dsadsa.jpg';

export default function Hotel() {
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
								<p className={style.title}>Pensjonat</p>
								<span className='badge bg-light text-dark'>
									Warszawa
								</span>
							</div>
							<div className='col'>
								<h5>Ocena: 8.3</h5>
								<a
									href='#section'
									className='btn btn-primary mt-2 px-5 float-end'>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={style.description}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quo facere nulla aut sint, reiciendis nam?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
