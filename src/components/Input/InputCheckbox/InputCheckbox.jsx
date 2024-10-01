import React from 'react';

export default function InputCheckbox({
	label,
	selectedValues = [],
	onChange,
	options = [],
	error = true,
	showError = false,
	...props
}) {
	const handleChange = (value) => {
		if (selectedValues.includes(value)) {
			onChange(selectedValues.filter((item) => item !== value));
		} else {
			onChange([...selectedValues, value]);
		}
	};

	return (
		<div className='form-group col-md-6 col-xl-4'>
			<h3>{label}</h3>
			{options.map((option) => (
				<div key={option.value} className='form-check'>
					<input
						className='form-check-input'
						type='checkbox'
						value={option.value}
						checked={selectedValues.includes(option.value)}
						onChange={() => handleChange(option.value)}
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
