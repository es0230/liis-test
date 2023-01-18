import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import { resetState } from '../../store/app-data/app-data';
import { logOut } from '../../store/user-data/user-data';
import LogoutIcon from '../svg/logout-icon';

const NavBar = (): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [needLogOut, setNeedLogOut] = useState(false);

	useEffect(() => {
		if (needLogOut) {
			dispatch(logOut());
			dispatch(resetState());
			navigate(AppRoute.Auth);
			setNeedLogOut(false);
		}
	}, [needLogOut, dispatch, navigate]);

	const handleLogoutClick = () => {
		setNeedLogOut(true);
	};

	return (
		<nav className="checker__navbar">
			<h1 className="checker__navbar-header">Simple Hotel Check</h1>
			<div className="checker__navbar-logout clickable" onClick={handleLogoutClick}>
				<p className="logout-text">Выйти</p>
				<LogoutIcon />
			</div>
		</nav>
	);
};

export default NavBar;
