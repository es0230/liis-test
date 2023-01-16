import { useAppSelector } from '../../../hooks/hooks';
import { selectFavoriteHotels } from '../../../store/app-data/selectors';
import Divider from '../../divider/divider';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesList = (): JSX.Element => {
	const favoriteHotels = useAppSelector(selectFavoriteHotels);

	return (
		<div className="favorites__list">
			{favoriteHotels.map((el, i, arr) => {
				return (
					<>
						<FavoritesItem hotel={el} key={el.hotel.hotelId} />
						{i < arr.length - 1 ? <Divider /> : <></>}
					</>
				);
			})}
		</div>
	);
};

export default FavoritesList;
