export function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

//rules
const availableRules = {
	required(value) {
		return value ? '' : 'Pole wymagane';
	},
	min(value, rule) {
		return value.length > rule.length
			? ''
			: `Minimum znaków: ${rule.length}`;
	},
	email(value) {
		return validateEmail(value) ? '' : 'Niepoprawny email';
	},
};

//validation
export function validate(rules = [], value) {
	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i];

		if (rule instanceof Object) {
			const errorMessage = availableRules[rule.rule](value, rule);
			if (errorMessage) {
				return errorMessage;
			}
		} else {
			const errorMessage = availableRules[rule](value);
			if (errorMessage) {
				return errorMessage;
			}
		}
	}

	return '';
}
