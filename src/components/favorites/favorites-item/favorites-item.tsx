import Rating from '@mui/material/Rating';
import { getNumberedString } from '../../../const';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { FavoriteHotel } from '../../../types/favorite-hotel';
import { deleteFromFavorites } from '../../../store/app-data/app-data';
import { useAppDispatch } from '../../../hooks/hooks';
import HeartFilled from '../../svg/heart-filled';

type FavoritesItemProps = {
	hotel: FavoriteHotel,
}

const FavoritesItem = ({ hotel }: FavoritesItemProps): JSX.Element => {
	const { hotel: { hotelName, stars, priceFrom }, checkIn, duration } = hotel;

	const dispatch = useAppDispatch();

	const handleFavoritesClick = () => {
		dispatch(deleteFromFavorites(hotel));
	};

	return (
		<div className="favorites__item">
			<div className="favorites__item-header">
				<p className="favorites__title">{hotelName}</p>
				<div onClick={handleFavoritesClick} className="favorites__is-favorite">
					<HeartFilled className="clickable" />
				</div>
			</div>
			<div className="favorites__item-main">
				<p className="favorites__date">{dayjs(checkIn).locale('ru').format('DD MMMM, YYYY')}</p>
				<span>—</span>
				<p className="favorites__duration">{getNumberedString(+duration, ['день', 'дня', 'дней'])}</p>
			</div>
			<div className="favorites__item-footer">
				<div className="favorites__rating">
					<Rating readOnly name="hotel-rating" size="small" value={stars} />
				</div>
				<div className="favorites__price">
					<div className="favorites__price-text">Цена:</div>
					<div className="favorites__price-value">{priceFrom} ₽</div>
				</div>
			</div>
		</div>
	);
};

export default FavoritesItem;
