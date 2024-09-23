import React from 'react';
import InputSelect from './InputSelect/InputSelect';
import InputText from './InputText/InputText';
import InputPassword from './InputPassword/InputPassword';
import InputEmail from './InputEmail/InputEmail';
import InputCheckbox from './InputCheckbox/InputCheckbox';
import InputFile from './InputFile/InputFile';
import InputRadio from './InputRadio/InputRadio';
import InputTextarea from './InputTextarea/InputTextarea';

export default function Input({ type = 'text', ...props }) {
	switch (type) {
		case 'select':
			return <InputSelect {...props} />;
		case 'checkbox':
			return <InputCheckbox {...props} />;
		case 'file':
			return <InputFile {...props} />;
		case 'radio':
			return <InputRadio {...props} />;
		case 'textarea':
			return <InputTextarea {...props} />;
		case 'password':
			return <InputPassword {...props} />;
		case 'email':
			return <InputEmail {...props} />;
		case 'text':
			return <InputText {...props} />;
		default:
			return null;
	}
}
