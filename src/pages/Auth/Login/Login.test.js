import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import axios from '../../../axios-auth';

jest.mock('../../../axios-auth');

test('renders Logowanie', () => {
	render(
		<Router>
			<Login />
		</Router>
	);
	const link = screen.getByText(/logowanie/i);
	expect(link).toBeInTheDocument();
});

test('changes email value', () => {
	render(
		<Router>
			<Login />
		</Router>
	);
	const emailInput = screen.getByLabelText('Email');

	fireEvent.change(emailInput, { target: { value: 'kropa' } });
	expect(emailInput.value).toBe('kropa');
});

test('show error on fail login', async () => {
	axios.post.mockImplementationOnce(() =>
		Promise.reject({
			response: { data: { error: { message: 'Błędne dane' } } },
		})
	);
	render(
		<Router>
			<Login />
		</Router>
	);
	const submitButton = screen.getByText('Zaloguj');

	fireEvent.click(submitButton);
	await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
	expect(await screen.findByText('Błędne dane')).toBeInTheDocument();
});
