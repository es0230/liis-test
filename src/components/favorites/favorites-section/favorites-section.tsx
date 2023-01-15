import FavoritesFilters from '../favorites-filters/favorites-filters';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesSection = (): JSX.Element => {
	return (
		<div className="checker__favorites content-item">
			<h2 className="favorites__header">Избранное</h2>
			<FavoritesFilters />
			<FavoritesList />
		</div>
	);
};

export default FavoritesSection;
