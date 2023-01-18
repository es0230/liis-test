import { FilterOrders, FilterTypes } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setFavoritesFilter } from '../../../store/app-data/app-data';
import { selectFavoritesFilter } from '../../../store/app-data/selectors';
import { FavoritesFilter } from '../../../types/favorites-filter';

const FavoritesFilters = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const favoritesFilter = useAppSelector(selectFavoritesFilter);

	const handleRatingToggleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
		const { toggleType } = evt.currentTarget.dataset;

		let newFilterState: FavoritesFilter;

		if (favoritesFilter.type !== toggleType) {
			newFilterState = { type: toggleType as FilterTypes, order: FilterOrders.Asc };
		} else {
			let newToggleOrder: FilterOrders;
			if (favoritesFilter.order === FilterOrders.Asc) {
				newToggleOrder = FilterOrders.Desc;
			} else {
				newToggleOrder = FilterOrders.Asc;
			}
			newFilterState = { type: favoritesFilter.type, order: newToggleOrder };
		}

		dispatch(setFavoritesFilter(newFilterState));
	};

	return (
		<div className="favorites__filters">
			<div
				className={`favorites__filter  clickable ${favoritesFilter.type === FilterTypes.Rating ? '' : 'filter-disabled'}`}
				data-toggle-type={FilterTypes.Rating}
				onClick={handleRatingToggleClick}
			>
				<p className="favorites__filters-type">Рейтинг</p>
				<div className="favorites__toggles">
					<div
						className={`toggle__asc ${favoritesFilter.order === FilterOrders.Asc || favoritesFilter.type !== FilterTypes.Rating ? '' : 'filter-disabled'}`}></div>
					<div
						className={`toggle__desc ${favoritesFilter.order === FilterOrders.Desc || favoritesFilter.type !== FilterTypes.Rating ? '' : 'filter-disabled'}`}></div>
				</div>
			</div>
			<div
				className={`favorites__filter  clickable ${favoritesFilter.type === FilterTypes.Price ? '' : 'filter-disabled'}`}
				data-toggle-type={FilterTypes.Price}
				onClick={handleRatingToggleClick}
			>
				<p className="favorites__filters-type">Цена</p>
				<div className="favorites__toggles">
					<div
						className={`toggle__asc ${favoritesFilter.order === FilterOrders.Asc || favoritesFilter.type !== FilterTypes.Price ? '' : 'filter-disabled'}`}></div>
					<div
						className={`toggle__desc ${favoritesFilter.order === FilterOrders.Desc || favoritesFilter.type !== FilterTypes.Price ? '' : 'filter-disabled'}`}></div>
				</div>
			</div>
		</div>
	);
};

export default FavoritesFilters;
