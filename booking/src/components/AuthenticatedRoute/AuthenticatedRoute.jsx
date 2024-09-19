import { Navigate } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import ReducerContext from '../context/reducerContext';
import { useContext } from 'react';

const AuthenticatedRoute = () => {
	const reducer = useContext(ReducerContext);
	if (!reducer.state.isAuthenticated) {
		return <Navigate to='/zaloguj' />;
	}
	return <Profile />;
};

export default AuthenticatedRoute;
