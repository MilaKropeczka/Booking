import React from 'react';

export default function InputText({
	label,
	value,
	onChange,
	error = true,
	showError = false,
	...props
}) {
	return (
		<div className='form-group col-md-6 col-xl-4'>
			<label>{label}</label>
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type='password'
				className={`form-control ${
					error && showError ? 'is-invalid' : ''
				}`}
				{...props}
			/>
			{showError && <div className='invalid-feedback'>{error}</div>}
		</div>
	);
}
