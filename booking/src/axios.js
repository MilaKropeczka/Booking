import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://booking-b3073-default-rtdb.firebaseio.com',
});

export default instance;
