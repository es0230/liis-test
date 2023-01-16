import HouseIcon from '../../svg/house';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Hotel } from '../../../types/hotels';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCheckIn, selectDuration } from '../../../store/app-data/selectors';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

type HotelsItemProps = {
	hotel: Hotel,
}

const HotelsItem = ({ hotel }: HotelsItemProps): JSX.Element => {
	const { hotelName, stars, priceFrom } = hotel;

	const duration = useAppSelector(selectDuration);
	const checkIn = useAppSelector(selectCheckIn);

	const getDurationString = (duration: number) => {
		if (`${duration}`.at(-1) === '0' || (duration >= 5 && duration <= 19)) {
			return `${duration} дней`;
		}
		if (`${duration}`.at(-1) === '2' || `${duration}`.at(-1) === '3' || `${duration}`.at(-1) === '4') {
			return `${duration} дня`;
		}
		return `${duration} день`;
	};

	return (
		<div className="hotels__item">
			<div className="hotels__item-icon">
				<HouseIcon />
			</div>
			<div className="hotels__item-content">
				<div className="hotels__item-header">
					<p className="hotels__title">{hotelName}</p>
					<div className="hotels__is-favorite">
						<FavoriteBorderOutlinedIcon sx={{ color: '#C4C4C4' }} className="clickable" />
						{/*<FavoriteIcon sx={{ color: '#E55858' }} />*/}
					</div>
				</div>
				<div className="hotels__item-main">
					<p className="hotels__date">{dayjs(checkIn).locale('ru').format('DD MMMM, YYYY')}</p>
					<span>—</span>
					<p className="hotels__duration">{getDurationString(duration)}</p>
				</div>
				<div className="hotels__item-footer">
					<div className="hotels__rating">
						<Rating readOnly name="hotel-rating" value={stars} />
					</div>
					<div className="hotels__price">
						<div className="hotels__price-text">Цена:</div>
						<div className="hotels__price-value">{priceFrom}</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default HotelsItem;
