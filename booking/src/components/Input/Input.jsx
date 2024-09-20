import React from 'react';

export default function Input({
	type = 'text',
	error = true,
	showError = false,
	label,
	value,
	onChange,
	options = [],
	...props
}) {
	if (type === 'text') {
		return (
			<div className='form-group col-md-6 col-xl-4'>
				<label>{label}</label>
				<input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					type={type}
					className={`form-control ${
						error && showError ? 'is-invalid' : ''
					}`}
					{...props}
				/>
				{showError && <div className='invalid-feedback'>{error}</div>}
			</div>
		);
	}

	if (type === 'select') {
		return (
			<div className='form-group col-md-6 col-xl-4'>
				<label>{label}</label>
				<select
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={`form-control ${
						error && showError ? 'is-invalid' : ''
					}`}
					{...props}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				{showError && <div className='invalid-feedback'>{error}</div>}
			</div>
		);
	}

	return null;
}
