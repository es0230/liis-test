import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import Auth from '../../pages/auth/auth';
import Checker from '../../pages/checker/checker';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path={AppRoute.Auth} element={<Auth />} />
			<Route path={AppRoute.Checker} element={<Checker />} />
			<Route index element={<Navigate to={AppRoute.Auth} replace />} />
			<Route path={AppRoute.Unknown} />
		</Routes>
	);
}

export default App;
