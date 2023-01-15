import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

const AuthForm = (): JSX.Element => {
	const navigate = useNavigate();

	const onAuthButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();
		navigate(AppRoute.Checker);
	}

	return (
		<form action="" className="auth__form">
			<h1 className="auth__header">Simple Hotel Check</h1>
			<div className="auth__inputs-container">
				<div className="auth__input-wrapper input-wrapper">
					<label htmlFor="login" className="auth__label">Логин</label>
					<input type="email" className="auth__input input" id="login" name="login" />
				</div>
				<div className="auth__input-wrapper input-wrapper">
					<label htmlFor="password" className="auth__label">Пароль</label>
					<input type="password" className="auth__input input" id="password" name="password" />
				</div>
			</div>
			<button className="auth__submit submit-button clickable" onClick={onAuthButtonClick}>Войти</button>
		</form>
	);
}

export default AuthForm;