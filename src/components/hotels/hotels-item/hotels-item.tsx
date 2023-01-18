import HouseIcon from '../../svg/house';
import Rating from '@mui/material/Rating';
import { Hotel } from '../../../types/hotels';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { selectCheckIn, selectDuration } from '../../../store/app-data/selectors';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { getNumberedString } from '../../../const';
import { addToFavorites, deleteFromFavorites } from '../../../store/app-data/app-data';
import { FavoriteHotel } from '../../../types/favorite-hotel';
import HeartBorder from '../../svg/heart-border';
import HeartFilled from '../../svg/heart-filled';

type HotelsItemProps = {
	hotel: Hotel,
	isFavorite: boolean,
}

const HotelsItem = ({ hotel, isFavorite }: HotelsItemProps): JSX.Element => {
	const { hotelName, stars, priceFrom } = hotel;

	const dispatch = useAppDispatch();
	const duration = useAppSelector(selectDuration);
	const checkIn = useAppSelector(selectCheckIn);
	const handleFavoritesClick = () => {
		const favoriteHotel: FavoriteHotel = { hotel, checkIn, duration };
		if (!isFavorite) {
			dispatch(addToFavorites(favoriteHotel));
		} else {
			dispatch(deleteFromFavorites(favoriteHotel));
		}
	};

	return (
		<div className="hotels__item">
			<div className="hotels__item-icon">
				<HouseIcon />
			</div>
			<div className="hotels__item-content">
				<div className="hotels__item-header">
					<p className="hotels__title">{hotelName}</p>
					<div onClick={handleFavoritesClick} className="hotels__is-favorite">
						{isFavorite ?
							<HeartFilled className="clickable" /> :
							<HeartBorder className="hotels__is-favorite-icon clickable" />
						}
					</div>
				</div>
				<div className="hotels__item-main">
					<p className="hotels__date">{dayjs(checkIn).locale('ru').format('DD MMMM, YYYY')}</p>
					<span>—</span>
					<p className="hotels__duration">{getNumberedString(duration, ['день', 'дня', 'дней'])}</p>
				</div>
				<div className="hotels__item-footer">
					<div className="hotels__rating">
						<Rating readOnly name="hotel-rating" value={stars} />
					</div>
					<div className="hotels__price">
						<div className="hotels__price-text">Цена:</div>
						<div className="hotels__price-value">{priceFrom} ₽</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default HotelsItem;
