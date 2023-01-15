import Divider from '../../divider/divider';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesList = (): JSX.Element => {
	return (
		<div className="favorites__list">
			<FavoritesItem />
			<Divider />
		</div>
	);
};

export default FavoritesList;
