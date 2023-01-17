import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthDataFields, EMAIL_REGEXP, PASSWORD_REGEXP } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchHotels } from '../../store/app-data/app-data';
import { logIn } from '../../store/user-data/user-data';
import { AuthData } from '../../types/auth-data';

const initialAuthData = {
	[AuthDataFields.Email]: '',
	[AuthDataFields.Password]: ''
};

const initialAuthValid = {
	[AuthDataFields.Email]: null,
	[AuthDataFields.Password]: null,
};


const AuthForm = (): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [authData, setAuthData] = useState<AuthData>(initialAuthData);
	const [authValid, setAuthValid] = useState(initialAuthValid);

	const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.currentTarget;
		setAuthData({ ...authData, [name]: value });
	};

	const handleInputBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = evt.currentTarget;
		const newIsValid = name === AuthDataFields.Email ? EMAIL_REGEXP.test(value) : PASSWORD_REGEXP.test(value);
		setAuthValid({ ...authValid, [name]: newIsValid });
	}

	const handleAuthButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();
		dispatch(logIn());
		dispatch(fetchHotels());
		navigate(AppRoute.Checker);
		setAuthData(initialAuthData);
		setAuthValid(initialAuthValid);
		//if (Object.values(authValid).every((el) => el === true)) {

		//}
	};

	return (
		<form action="" className="auth__form">
			<h1 className="auth__header">Simple Hotel Check</h1>
			<div className="auth__inputs-container">
				<div className="auth__input-wrapper input-wrapper">
					<label htmlFor={AuthDataFields.Email} className={`auth__label ${authValid[AuthDataFields.Email] !== false ? '' : 'invalid-label'}`}>Логин</label>
					<input onBlur={handleInputBlur} onChange={handleInputChange} type="email" className={`auth__input input ${authValid[AuthDataFields.Email] !== false ? '' : 'invalid-input'}`} id="email" name={AuthDataFields.Email} />
					{authValid[AuthDataFields.Email] !== false ? <></> : <p className='auth__input-error'>Некорректный email</p>}
				</div>
				<div className="auth__input-wrapper input-wrapper">
					<label htmlFor={AuthDataFields.Password} className={`auth__label ${authValid[AuthDataFields.Password] !== false ? '' : 'invalid-label'}`}>Пароль</label>
					<input onBlur={handleInputBlur} onChange={handleInputChange} type="password" className={`auth__input input ${authValid[AuthDataFields.Password] !== false ? '' : 'invalid-input'}`} id="password" name={AuthDataFields.Password} />
					{authValid[AuthDataFields.Password] !== false ? <></> : <p className='auth__input-error'>Некорректный пароль</p>}
				</div>
			</div>
			<button className="auth__submit submit-button clickable" onClick={handleAuthButtonClick}>Войти</button>
		</form>
	);
}

export default AuthForm;
