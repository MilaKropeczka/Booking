import React from 'react';

export default function InputFile({
	label,
	onChange,
	error = true,
	showError = false,
	imageRef,
	...props
}) {
	return (
		<div className='form-group col-md-6 col-xl-4'>
			<h3>{label}</h3>
			<input
				type='file'
				onChange={(e) => onChange(e.target.files)}
				ref={imageRef}
				className={`form-control-file ${
					error && showError ? 'is-invalid' : ''
				}`}
				{...props}
			/>
			{showError && <div className='invalid-feedback'>{error}</div>}
		</div>
	);
}
