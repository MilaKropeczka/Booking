import React, { useRef, useState } from 'react';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';
import Input from '../../../../components/Input/Input';
import { validate } from '../../../../helpers/validations';

export default function AddHotel() {
	const imageRef = useRef();

	const [form, setForm] = useState({
		name: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', { rule: 'min', length: 4 }],
		},
		description: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', { rule: 'min', length: 10 }],
		},
		city: {
			value: '',
			error: '',
			showError: false,
			rules: ['required'],
		},
		rooms: {
			value: 2,
			error: '',
			showError: false,
			rules: ['required'],
		},
		features: {
			value: [],
			error: '',
			showError: false,
		},
		image: {
			value: null,
			error: '',
			showError: false,
		},
		status: {
			value: 0,
			error: '',
			showError: false,
			rules: ['required'],
		},
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

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value);
		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				value,
				showError: true,
				error: error,
			},
		});
	};

	return (
		<div className='card'>
			<div className='card-header'>Nowy hotel</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane hotelu</p>
				<form onSubmit={sumbit}>
					<Input
						label='Nazwa'
						value={form.name.value}
						onChange={(value) => changeHandler(value, 'name')}
						error={form.name.error}
						showError={form.name.showError}
					/>
					<Input
						label='Opis'
						type='textarea'
						value={form.description.value}
						onChange={(value) =>
							changeHandler(value, 'description')
						}
						error={form.description.error}
						showError={form.description.showError}
					/>
					<Input
						label='Miejscowość'
						value={form.city.value}
						onChange={(value) => changeHandler(value, 'city')}
						error={form.city.error}
						showError={form.city.showError}
					/>
					<Input
						label='Ilość pokoi'
						type='select'
						value={form.rooms.value}
						onChange={(value) => changeHandler(value, 'rooms')}
						options={[
							{ value: 1, label: 1 },
							{ value: 2, label: 2 },
							{ value: 3, label: 3 },
							{ value: 4, label: 4 },
						]}
						error={form.rooms.error}
						showError={form.rooms.showError}
					/>
					<br />

					<Input
						label='Udogodnienia'
						type='checkbox'
						selectedValues={form.features.value}
						onChange={(value) => changeHandler(value, 'features')}
						options={[
							{ value: 'wifi', label: 'Wi-fi' },
							{ value: 'tv', label: 'TV' },
							{ value: 'parking', label: 'Parking' },
						]}
						error={form.features.error}
						showError={form.features.showError}
					/>
					<br />

					<Input
						label='Zdjęcie'
						type='file'
						onChange={(value) => changeHandler(value, 'image')}
						error={form.image.error}
						showError={form.image.showError}
					/>

					<br />

					<Input
						label='Status'
						type='radio'
						selectedValue={form.status.value}
						onChange={(value) => changeHandler(value, 'status')}
						options={[
							{ value: '1', label: 'Aktywny' },
							{ value: '0', label: 'Ukryty' },
						]}
						error={form.status.error}
						showError={form.status.showError}
					/>
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
