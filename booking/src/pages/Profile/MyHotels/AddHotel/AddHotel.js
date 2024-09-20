import React, { useRef, useState } from 'react';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';
import Input from '../../../../components/Input/Input';

export default function AddHotel() {
	const imageRef = useRef();
	const [form, setForm] = useState({
		name: '',
		description: '',
		city: '',
		rooms: 2,
		features: [],
		image: null,
		status: 0,
	});

	const [loading, setLoading] = useState(false);

	const sumbit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(form);
		console.log(imageRef.current);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	function changeFeatureHandler(e) {
		const value = e.target.value;
		const isChecked = e.target.checked;

		if (isChecked) {
			const newFeatures = [...form.features, value];
			setForm({ ...form, features: newFeatures });
		} else {
			const newFeatures = form.features.filter((x) => x !== value);
			setForm({ ...form, features: newFeatures });
		}
	}

	return (
		<div className='card'>
			<div className='card-header'>Nowy hotel</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane hotelu</p>
				<form onSubmit={sumbit}>
					<Input
						label='Nazwa'
						value={form.name}
						onChange={(value) => setForm({ ...form, name: value })}
						error=''
						showError={false}
					/>
					<Input
						label='Opis'
						value={form.description}
						onChange={(value) =>
							setForm({ ...form, description: value })
						}
						error=''
						showError={false}
					/>
					<Input
						label='Miejscowość'
						value={form.city}
						onChange={(value) => setForm({ ...form, city: value })}
						error=''
						showError={false}
					/>
					<Input
						label='Ilość pokoi'
						type='select'
						value={form.rooms}
						onChange={(value) => setForm({ ...form, rooms: value })}
						options={[
							{ value: 1, label: 1 },
							{ value: 2, label: 2 },
							{ value: 3, label: 3 },
							{ value: 4, label: 4 },
						]}
						error=''
						showError={false}
					/>

					{/* <div className='form-group col-md-6 col-xl-4'>
						<label>Ilość pokoi</label>
						<select
							value={form.rooms}
							onChange={(e) =>
								setForm({ ...form, rooms: e.target.value })
							}
							className='form-control'>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
						</select>
						<div className='invalid-feedback'>Błąd</div>
					</div> */}
					<br />

					<div className='form-group col-md-6 col-xl-4'>
						<h3>Udogodnienia</h3>

						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value='wifi'
								checked={form.features.find(
									(x) => x === 'wifi'
								)}
								onChange={changeFeatureHandler}
							/>
							<label className='form-check-label' htmlFor='wifi'>
								Wi-fi
							</label>
						</div>

						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value='tv'
								checked={form.features.find((x) => x === 'tv')}
								onChange={changeFeatureHandler}
							/>
							<label className='form-check-label' htmlFor='tv'>
								TV
							</label>
						</div>

						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value='parking'
								checked={form.features.find(
									(x) => x === 'parking'
								)}
								onChange={changeFeatureHandler}
							/>
							<label
								className='form-check-label'
								htmlFor='parking'>
								Parking
							</label>
						</div>
					</div>
					<br />

					<div className='form-group col-md-6 col-xl-4'>
						<h3>Zdjęcie</h3>
						<input
							type='file'
							onChange={(e) =>
								setForm({ ...form, image: e.target.files })
							}
							ref={imageRef}
						/>
					</div>
					<br />

					<h3>Status</h3>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='status'
							value='1'
							onChange={(e) =>
								setForm({ ...form, status: e.target.value })
							}
							checked={form.status === 1}
						/>
						<label className='form-check-label'>Aktywny</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							value='0'
							onChange={(e) =>
								setForm({ ...form, status: e.target.value })
							}
							name='status'
							checked={form.status === 0}
						/>
						<label className='form-check-label'>Ukryty</label>
					</div>
					<br />
					<div className='text-end col-md-6 col-xl-4'>
						<LoadingButton
							loading={loading}
							className='btn-success'>
							Dodaj hotel!
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
}
