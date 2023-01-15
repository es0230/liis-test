import AuthForm from '../../components/auth-form/auth-form';

const Auth = (): JSX.Element => {
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
