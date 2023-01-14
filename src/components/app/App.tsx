import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import Auth from '../../pages/auth/auth';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path={AppRoute.Auth} element={<Auth />} />
			<Route path={AppRoute.Checker} />
			<Route index element={<Navigate to={AppRoute.Auth} replace />} />
			<Route path={AppRoute.Unknown} />
		</Routes>
	);
}

export default App;
