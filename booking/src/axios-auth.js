import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1/',
	params: {
		key: 'AIzaSyBsyTGYyzSdghEjDk04BzBLZctCrOOHZMA',
	},
});

export default instance;
