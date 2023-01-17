import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth-form/auth-form';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import { selectIsAuthorized } from '../../store/user-data/selectors';

const Auth = (): JSX.Element => {
	const navigate = useNavigate();
	const isAuthorized = useAppSelector(selectIsAuthorized);

	useEffect(() => {
		if (isAuthorized) {
			navigate(AppRoute.Checker);
		}
	});

	return (
		<div className="auth">
			<div className="auth__image"></div>
			<div className="auth__container">
				<AuthForm />
			</div>
		</div>
	);
}

export default Auth;

//разобраться со стилями и перенаправлением
