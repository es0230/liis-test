import { FilterOrders, FilterTypes } from '../../../const';
import { useAppSelector } from '../../../hooks/hooks';
import { selectFavoritesFilter, selectFavoriteHotels } from '../../../store/app-data/selectors';
import Divider from '../../divider/divider';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesList = (): JSX.Element => {
	const favoriteHotels = useAppSelector(selectFavoriteHotels);
	const favoritesFilter = useAppSelector(selectFavoritesFilter);

	const sortedHotels = favoriteHotels.slice().sort((a, b) => {
		const { type, order } = favoritesFilter;
		const sortProp = type === FilterTypes.Rating ? 'stars' : 'priceFrom';
		return order === FilterOrders.Asc ? a.hotel[sortProp] - b.hotel[sortProp] : b.hotel[sortProp] - a.hotel[sortProp];
	});

	return (
		<div className="favorites__list">
			{sortedHotels.map((el, i, arr) => {
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
