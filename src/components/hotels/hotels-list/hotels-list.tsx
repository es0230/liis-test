import { getNumberedString } from '../../../const';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCheckIn, selectFavoriteHotels, selectHotels } from '../../../store/app-data/selectors';
import Divider from '../../divider/divider';
import HotelsItem from '../hotels-item/hotels-item';

const HotelsList = (): JSX.Element => {
	const hotels = useAppSelector(selectHotels);
	const favoriteHotels = useAppSelector(selectFavoriteHotels);
	const checkIn = useAppSelector(selectCheckIn);

	return (
		<div className="checker__hotels-list">
			<div className="hotels__favorite-count">
				Добавлено в Избранное: {getNumberedString(favoriteHotels.length, ['отель', 'отеля', 'отелей'])}
			</div>
			<div className="hotels__list">
				{hotels.map((el, i, arr) => {
					return (
						<>
							<HotelsItem
								hotel={el}
								isFavorite={favoriteHotels.some((favHotel) => favHotel.hotel.hotelId === el.hotelId && favHotel.checkIn === checkIn)}
								key={el.hotelId}
							/>
							{i < arr.length - 1 ? <Divider /> : <></>}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default HotelsList;
