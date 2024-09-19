import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../../UI/LoadingButton/LoadingButton';

export default function Login() {
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);

	const sumbit = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			if (true) {
				setAuth(true);
				navigate('/');
			} else {
				setValid(false);
			}
			setLoading(false);
			setPassword('');
		}, 500);
	};

	return (
		<div>
			<h2>Logowanie</h2>
			{valid === false ? (
				<div className='alert alert-danger'>
					Niepoprawne dane logowania
				</div>
			) : null}
			<form onSubmit={sumbit}>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'
					/>
				</div>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Hasło</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='form-control'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<LoadingButton loading={loading}>Zaloguj</LoadingButton>
				</div>
			</form>
		</div>
	);
}
