import { getNumberedString } from '../../../const';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCheckIn, selectDuration, selectFavoriteHotels, selectHotels, selectHotelsFetchFailed, selectHotelsLoading } from '../../../store/app-data/selectors';
import Divider from '../../divider/divider';
import HotelsItem from '../hotels-item/hotels-item';
import CircularProgress from '@mui/material/CircularProgress';

const HotelsList = (): JSX.Element => {
	const hotels = useAppSelector(selectHotels);
	const favoriteHotels = useAppSelector(selectFavoriteHotels);
	const checkIn = useAppSelector(selectCheckIn);
	const duration = useAppSelector(selectDuration);
	const hotelsLoading = useAppSelector(selectHotelsLoading);
	const hotelsFetchFailed = useAppSelector(selectHotelsFetchFailed);

	if (hotelsFetchFailed) {
		return (
			<div className="checker__hotels-list checker__hotels-fetch-failed">
				Запрос не удался (╥_╥)<br />
				Повторите запрос попозже или поменяйте параметры запроса
			</div>
		);
	}

	return (
		<div className={`checker__hotels-list ${hotelsLoading ? 'checker__hotels-loading' : ''}`}>
			{hotelsLoading ?
				<CircularProgress sx={{ color: 'var(--accent-color)' }} /> :
				<>
					<div className="hotels__favorite-count">
						Добавлено в Избранное: {getNumberedString(favoriteHotels.length, ['отель', 'отеля', 'отелей'])}
					</div>
					<div className="hotels__list">
						{hotels.map((el, i, arr) => {
							return (
								<>
									<HotelsItem
										hotel={el}
										isFavorite={favoriteHotels.some((favHotel) => favHotel.hotel.hotelId === el.hotelId && favHotel.checkIn === checkIn && favHotel.duration === duration)}
										key={el.hotelId}
									/>
									{i < arr.length - 1 ? <Divider /> : <></>}
								</>
							);
						})}
					</div>
				</>
			}
		</div>
	);
};

export default HotelsList;
