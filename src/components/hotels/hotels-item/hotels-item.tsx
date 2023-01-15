import HouseIcon from '../../svg/house';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const HotelsItem = (): JSX.Element => {
	return (
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
	);
};

export default HotelsItem;
