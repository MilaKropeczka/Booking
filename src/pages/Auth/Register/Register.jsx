import { useState, useRef } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import Input from '../../../components/Input/Input';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios-auth';

export default function Register(props) {
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();
	const [loading, setLoading] = useState(false);
	const imageRef = useRef();

	const [form, setForm] = useState({
		email: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', 'email'],
		},
		password: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', { rule: 'min', length: 3 }],
		},
	});

	const [error, setError] = useState('');

	const sumbit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post('accounts:signUp', {
				email: form.email.value,
				password: form.password.value,
				returnSecureToken: true,
			});

			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			navigate('/');
		} catch (ex) {
			setError(ex.response.data.error.message);
			setLoading(false);
		}
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
	const valid = !Object.values(form)
		.map((input) => input.error)
		.filter((error) => error).length;

	if (auth) {
		navigate('/');
	}
	return (
		<div className='card'>
			<div className='card-header'>Rejestracja</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane</p>
				<form onSubmit={sumbit}>
					<Input
						label='Email'
						value={form.email.value}
						onChange={(value) => changeHandler(value, 'email')}
						error={form.email.error}
						showError={form.email.showError}
					/>
					<Input
						label='Hasło'
						type='password'
						value={form.password.value}
						onChange={(value) => changeHandler(value, 'password')}
						error={form.password.error}
						showError={form.password.showError}
					/>
					{error ? (
						<div className='alert alert-danger'>{error}</div>
					) : null}

					<div className='text-end col-md-6 col-xl-4'>
						<LoadingButton
							loading={loading}
							disabled={!valid}
							className='btn-success'>
							Zarejestruj
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
}
