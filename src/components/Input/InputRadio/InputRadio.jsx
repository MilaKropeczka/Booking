import React from 'react';

export default function InputRadio({
	label,
	selectedValue,
	onChange,
	options = [],
	error = true,
	showError = false,
	...props
}) {
	return (
		<div className='form-group col-md-6 col-xl-4'>
			<h3>{label}</h3>
			{options.map((option) => (
				<div key={option.value} className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => onChange(option.value)}
						{...props}
					/>
					<label className='form-check-label' htmlFor={option.value}>
						{option.label}
					</label>
				</div>
			))}
			{showError && <div className='invalid-feedback'>{error}</div>}
		</div>
	);
}
