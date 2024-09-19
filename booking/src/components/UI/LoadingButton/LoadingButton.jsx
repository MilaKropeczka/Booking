import React from 'react';

export default function LoadingButton(props) {
	const className = props.className || 'btn-primary';

	return props.loading ? (
		<button class={`btn ${className} mt-3`} type='button' disabled>
			<span
				class='spinner-border spinner-border-sm'
				role='status'
				aria-hidden='true'></span>
			<span class='sr-only'> Ładowanie...</span>
		</button>
	) : (
		<button {...props} className={`btn ${className} mt-3`}>
			{props.children}
		</button>
	);
}
