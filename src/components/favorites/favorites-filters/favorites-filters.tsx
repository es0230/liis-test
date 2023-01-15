const FavoritesFilters = (): JSX.Element => {
	return (
		<div className="favorites__filters">
			<div className="favorites__filters-rating filter-ascending">
				<p className="favorites__filters-type">Рейтинг</p>
				<div className="favorites__toggles">
					<div className="toggle__asc clickable"></div>
					<div className="toggle__desc clickable"></div>
				</div>
			</div>
			<div className="favorites__filters-price filter-disabled">
				<p className="favorites__filters-type">Цена</p>
				<div className="favorites__toggles">
					<div className="toggle__asc clickable"></div>
					<div className="toggle__desc clickable"></div>
				</div>
			</div>
		</div>
	);
};

export default FavoritesFilters;
