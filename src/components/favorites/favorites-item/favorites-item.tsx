import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Rating from '@mui/material/Rating';

const FavoritesItem = (): JSX.Element => {
	return (
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
					<Rating name="hotel-rating" value={2} />
				</div>
				<div className="favorites__price">
					<div className="favorites__price-text">Price:</div>
					<div className="favorites__price-value">23 924 ₽</div>
				</div>
			</div>
		</div>
	);
};

export default FavoritesItem;
