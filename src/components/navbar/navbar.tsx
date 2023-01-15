import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import LogoutIcon from '../svg/logout-icon';

const NavBar = (): JSX.Element => {
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		navigate(AppRoute.Auth);
	}

	return (
		<nav className="checker__navbar">
			<h1 className="checker__navbar-header">Simple Hotel Check</h1>
			<div className="checker__navbar-logout clickable" onClick={handleLogoutClick}>
				<p className="logout-text">Выйти</p>
				<LogoutIcon />
			</div>
		</nav>
	);
}

export default NavBar;
