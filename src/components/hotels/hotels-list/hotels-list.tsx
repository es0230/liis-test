import { useAppSelector } from '../../../hooks/hooks';
import { selectHotels } from '../../../store/app-data/selectors';
import Divider from '../../divider/divider';
import HotelsItem from '../hotels-item/hotels-item';

const HotelsList = (): JSX.Element => {
	const hotels = useAppSelector(selectHotels);

	return (
		<div className="checker__hotels-list">
			<div className="hotels__favorite-count">
				Добавлено в Избранное: 3 отеля
			</div>
			<div className="hotels__list">
				{hotels.map((el, i, arr) => {
					return (
						<>
							<HotelsItem hotel={el} key={el.hotelId} />
							{i < arr.length - 1 ? <Divider /> : <></>}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default HotelsList;
