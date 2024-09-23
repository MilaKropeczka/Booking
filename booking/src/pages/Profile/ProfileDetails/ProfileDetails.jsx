import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validateEmail } from '../../../helpers/validations';

export default function ProfileDetails() {
	const [auth] = useAuth();

	const [email, setEmail] = useState(auth.email);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const buttonDisabled = Object.values(errors).filter((x) => x).length;

	const sumbit = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		if (validateEmail(email)) {
			setErrors({ ...errors, email: '' });
		} else {
			setErrors({ ...errors, email: 'Niepoprawny email' });
		}
	}, [email]);

	useEffect(() => {
		if (password.length >= 6 || !password) {
			setErrors({ ...errors, password: '' });
		} else {
			setErrors({ ...errors, password: 'Wymagane 6 znaków' });
		}
	}, [password]);

	return (
		<div>
			<form onSubmit={sumbit}>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`form-control ${
							errors.email ? 'is-invalid' : 'is-valid'
						}`}
					/>
					<div className='invalid-feedback'>{errors.email}</div>
					<div className='valid-feedback'>Wszystko gra!</div>
				</div>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Hasło</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={`form-control ${
							errors.password ? 'is-invalid' : ''
						}`}
					/>
					<div className='invalid-feedback'>{errors.password}</div>
				</div>
				<div className='col-md-6 col-xl-3'>
					<LoadingButton loading={loading} disabled={buttonDisabled}>
						Zapisz
					</LoadingButton>
				</div>
			</form>
		</div>
	);
}
