import HotelsBreadcrumbs from '../hotels-breadcrumbs/hotels-breadcrumbs';
import HotelsCarousel from '../hotels-carousel/hotels-carousel';
import HotelsList from '../hotels-list/hotels-list';

const HotelsSection = (): JSX.Element => {
	return (
		<div className="checker__hotels content-item">
			<HotelsBreadcrumbs />
			<HotelsCarousel />
			<HotelsList />
		</div>
	);
}

export default HotelsSection;
