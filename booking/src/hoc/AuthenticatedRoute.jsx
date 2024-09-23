import { useContext, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import ReducerContext from '../context/reducerContext';

const AuthenticatedRoute = (props) => {
	const reducer = useContext(ReducerContext);
	if (!reducer.state.user) {
		return <Navigate to='/zaloguj' />;
	}
	return <Suspense fallback={<p>Ładowanie...</p>}>{props.children}</Suspense>;
};

export default AuthenticatedRoute;
