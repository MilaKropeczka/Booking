import React from 'react';

export default function InputSelect({
	label,
	value,
	onChange,
	options = [],
	error = true,
	showError = false,
	...props
}) {
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
