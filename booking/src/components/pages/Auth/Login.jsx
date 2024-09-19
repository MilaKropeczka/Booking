import React from 'react';

export default function Login() {
	const handleChange = (event) => {
		console.log(`object`);
	};
	return (
		<div>
			<h2>Logowanie</h2>
			<form>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Email</label>
					<input
						type='email'
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<div className='form-group col-md-6 col-xl-3'>
					<label>Hasło</label>
					<input
						type='password'
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<div className='col-md-6 col-xl-3'>
					<button className='btn btn-primary mt-3'>Zapisz</button>
				</div>
			</form>
		</div>
	);
}
