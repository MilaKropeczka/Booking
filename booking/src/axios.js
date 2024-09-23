import axios from 'axios';

const instance = axios.create({
	baseURL: 'REACT_APP_DATABASE',
});

export default instance;
