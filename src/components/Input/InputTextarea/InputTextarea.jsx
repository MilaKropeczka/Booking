import React from 'react';

export default function InputTextarea({
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
			<textarea
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type='text'
				className={`form-control ${
					error && showError ? 'is-invalid' : ''
				}`}
				{...props}
			/>
			{showError && <div className='invalid-feedback'>{error}</div>}
		</div>
	);
}
