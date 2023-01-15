import { useState } from 'react';
import { FilterOrders, FilterTypes } from '../../../const';
import { FavoritesFilter } from '../../../types/favorites-filter';

const initialFilter: FavoritesFilter = {
	type: FilterTypes.Rating,
	order: FilterOrders.Asc
}

const FavoritesFilters = (): JSX.Element => {
	const [favoritesFilter, setFavoritesFilter] = useState<FavoritesFilter>(initialFilter);

	const handleRatingToggleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
		const { toggleType, toggleOrder } = evt.currentTarget.dataset;
		setFavoritesFilter({ type: toggleType as FilterTypes, order: toggleOrder as FilterOrders });
	}

	return (
		<div className="favorites__filters">
			<div className={`favorites__filter ${favoritesFilter.type === FilterTypes.Rating ? '' : 'filter-disabled'}`}>
				<p className="favorites__filters-type">Рейтинг</p>
				<div className="favorites__toggles">
					<div
						data-toggle-type={FilterTypes.Rating}
						data-toggle-order={FilterOrders.Asc}
						onClick={handleRatingToggleClick}
						className={`toggle__asc clickable ${favoritesFilter.order === FilterOrders.Asc || favoritesFilter.type !== FilterTypes.Rating ? '' : 'filter-disabled'}`}></div>
					<div
						data-toggle-type={FilterTypes.Rating}
						data-toggle-order={FilterOrders.Desc}
						onClick={handleRatingToggleClick}
						className={`toggle__desc clickable ${favoritesFilter.order === FilterOrders.Desc || favoritesFilter.type !== FilterTypes.Rating ? '' : 'filter-disabled'}`}></div>
				</div>
			</div>
			<div className={`favorites__filter ${favoritesFilter.type === FilterTypes.Price ? '' : 'filter-disabled'}`}>
				<p className="favorites__filters-type">Цена</p>
				<div className="favorites__toggles">
					<div
						data-toggle-type={FilterTypes.Price}
						data-toggle-order={FilterOrders.Asc}
						onClick={handleRatingToggleClick}
						className={`toggle__asc clickable ${favoritesFilter.order === FilterOrders.Asc || favoritesFilter.type !== FilterTypes.Price ? '' : 'filter-disabled'}`}></div>
					<div
						data-toggle-type={FilterTypes.Price}
						data-toggle-order={FilterOrders.Desc}
						onClick={handleRatingToggleClick}
						className={`toggle__desc clickable ${favoritesFilter.order === FilterOrders.Desc || favoritesFilter.type !== FilterTypes.Price ? '' : 'filter-disabled'}`}></div>
				</div>
			</div>
		</div>
	);
};

export default FavoritesFilters;
