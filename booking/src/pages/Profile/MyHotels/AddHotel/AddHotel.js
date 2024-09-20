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
						type='textarea'
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
					<br />

					<Input
						label='Udogodnienia'
						type='checkbox'
						selectedValues={form.features}
						onChange={(values) =>
							setForm({ ...form, features: values })
						}
						options={[
							{ value: 'wifi', label: 'Wi-fi' },
							{ value: 'tv', label: 'TV' },
							{ value: 'parking', label: 'Parking' },
						]}
						error=''
						showError={false}
					/>
					<br />

					<Input
						label='Zdjęcie'
						type='file'
						onChange={(files) => setForm({ ...form, image: files })}
						error=''
						showError={false}
					/>

					<br />

					<Input
						label='Status'
						type='radio'
						selectedValue={form.status}
						onChange={(value) =>
							setForm({ ...form, status: value })
						}
						options={[
							{ value: '1', label: 'Aktywny' },
							{ value: '0', label: 'Ukryty' },
						]}
						error=''
						showError={false}
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
