import LogoutIcon from '../../components/svg/logout-icon';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HouseIcon from '../../components/svg/house';


const Checker = (): JSX.Element => {
	return (
		<div className="checker">
			<nav className="checker__navbar">
				<h1 className="checker__navbar-header">Simple Hotel Check</h1>
				<div className="checker__navbar-logout clickable">
					<p className="logout-text">Выйти</p>
					<LogoutIcon />
				</div>
			</nav>
			<main className="checker__main">
				<div className="checker__content-wrapper">
					<div className="checker__content">
						<form action="" className="query-form content-item">
							<div className="query-form__inputs-container">
								<div className="query-form__input-wrapper input-wrapper">
									<label htmlFor="location" className="query-form__label">Локация</label>
									<input type="text" className="query-form__input input" name="location" />
								</div>
								<div className="query-form__input-wrapper input-wrapper">
									<label htmlFor="checkIn" className="query-form__label">Дата заселения</label>
									<input type="text" className="query-form__input input" name="checkIn" />
								</div>
								<div className="query-form__input-wrapper input-wrapper">
									<label htmlFor="duration" className="query-form__label">Количество дней</label>
									<input type="text" className="query-form__input input" name="duration" />
								</div>
							</div>
							<button className="query-form__submit submit-button clickable">Найти</button>
						</form>
						<div className="checker__favorites content-item">
							<h2 className="favorites__header">Избранное</h2>
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
							<div className="favorites__list">
								<div className="favorites__item">
									<div className="favorites__item-header">
										<p className="favorites__title">Moscow Mariott Grand Hotel</p>
										<div className="favorites__is-favorite">
											<FavoriteIcon className="clickable" sx={{ color: '#E55858' }} />
											{/*<FavoriteBorderOutlinedIcon />*/}
										</div>
									</div>
									<div className="favorites__item-main">
										<p className="favorites__date">28 июня 2020</p>
										<span>—</span>
										<p className="favorites__duration">1 день</p>
									</div>
									<div className="favorites__item-footer">
										<div className="favorites__rating">
											<Rating name="hotel-rating" value={3} />
										</div>
										<div className="favorites__price">
											<div className="favorites__price-text">Price:</div>
											<div className="favorites__price-value">23 924 ₽</div>
										</div>
									</div>
								</div>
								<div className="favorites__divider" />
							</div>
						</div>
					</div>
					<div className="checker__content">
						<div className="checker__hotels content-item">
							<div className="checker__hotels-header">
								<div className="checker__hotels-breadcrumbs">
									<div className="breadcrumbs__common">Отели</div>
									<ChevronRightIcon sx={{ fontSize: "xxx-large", margin: "0 -16px", color: "#A7A7A7" }} />
									<div className="breadcrumbs__location">Москва</div>
								</div>
								<div className="checker__hotels-date">07 июля 2020</div>
							</div>
							<div className="checker__photo-slider"></div>
							<div className="checker__hotels-list">
								<div className="hotels__favorite-count">
									Добавлено в Избранное: 3 отеля
								</div>
								<div className="hotels__list">
									<div className="hotels__item">
										<div className="hotels__item-icon">
											<HouseIcon />
										</div>
										<div className="hotels__item-content">
											<div className="hotels__item-header">
												<p className="hotels__title">Moscow Mariott Grand Hotel</p>
												<div className="hotels__is-favorite">
													<FavoriteBorderOutlinedIcon className="clickable" />
													{/*<FavoriteIcon sx={{ color: '#E55858' }} />*/}
												</div>
											</div>
											<div className="hotels__item-main">
												<p className="hotels__date">28 июня 2020</p>
												<span>—</span>
												<p className="hotels__duration">1 день</p>
											</div>
											<div className="hotels__item-footer">
												<div className="hotels__rating">
													<Rating name="hotel-rating" value={3} />
												</div>
												<div className="hotels__price">
													<div className="hotels__price-text">Price:</div>
													<div className="hotels__price-value">23 924 ₽</div>
												</div>
											</div>
										</div>

									</div>
									<div className="hotels__divider" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
};

export default Checker;
