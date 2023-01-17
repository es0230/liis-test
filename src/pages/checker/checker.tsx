import NavBar from '../../components/navbar/navbar';
import QueryForm from '../../components/query-form/query-form';
import FavoritesSection from '../../components/favorites/favorites-section/favorites-section';
import HotelsSection from '../../components/hotels/hotels-section/hotels-section';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectHotels } from '../../store/app-data/selectors';
import { fetchHotels } from '../../store/app-data/app-data';
import { AppRoute } from '../../const';
import { selectIsAuthorized } from '../../store/user-data/selectors';
import { useNavigate } from 'react-router-dom';


const Checker = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const hotels = useAppSelector(selectHotels);
	const isAuthorized = useAppSelector(selectIsAuthorized);

	useEffect(() => {
		if (hotels.length === 0) {
			dispatch(fetchHotels());
		}
		if (!isAuthorized) {
			navigate(AppRoute.Auth);
		}
	});

	return (
		<div className="checker">
			<NavBar />
			<main className="checker__main">
				<div className="checker__content-wrapper">
					<div className="checker__content">
						<QueryForm />
						<FavoritesSection />
					</div>
					<div className="checker__content">
						<HotelsSection />
					</div>
				</div>
			</main>
		</div>
	)
};

export default Checker;
