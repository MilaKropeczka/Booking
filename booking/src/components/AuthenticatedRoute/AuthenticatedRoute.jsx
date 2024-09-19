import { useContext, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import ReducerContext from '../context/reducerContext';
const Profile = lazy(() => import('../pages/Profile/Profile'));

const AuthenticatedRoute = () => {
	const reducer = useContext(ReducerContext);
	if (!reducer.state.isAuthenticated) {
		return <Navigate to='/zaloguj' />;
	}
	return (
		<Suspense fallback={<p>Ładowanie...</p>}>
			<Profile />
		</Suspense>
	);
};

export default AuthenticatedRoute;
