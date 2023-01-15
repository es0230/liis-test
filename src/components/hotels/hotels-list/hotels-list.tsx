import Divider from '../../divider/divider';
import HotelsItem from '../hotels-item/hotels-item';

const HotelsList = (): JSX.Element => {
	return (
		<div className="checker__hotels-list">
			<div className="hotels__favorite-count">
				Добавлено в Избранное: 3 отеля
			</div>
			<div className="hotels__list">
				<HotelsItem />
				<Divider />
			</div>
		</div>
	);
};

export default HotelsList;
