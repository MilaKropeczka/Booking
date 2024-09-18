import React from 'react';

export default function ProfileDetails() {
	const handleChange = (event) => {
		console.log(`object`);
	};
	return (
		<form>
			<div className='form-group col-md-6 col-xl-3'>
				<label>Email</label>
				<input
					type='email'
					value='milakropeczka@gmail.com'
					onChange={handleChange}
					className='form-control'
				/>
			</div>
			<div className='form-group col-md-6 col-xl-3'>
				<label>Hasło</label>
				<input
					type='password'
					value='********'
					onChange={handleChange}
					className='form-control'
				/>
			</div>
			<div className='col-md-6 col-xl-3'>
				<button className='btn btn-primary mt-3'>Zapisz</button>
			</div>
		</form>
	);
}
