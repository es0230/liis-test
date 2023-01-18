import { useAppSelector } from '../../../hooks/hooks';
import { selectHotelsCarouselImages } from '../../../store/app-data/selectors';
import HotelsBreadcrumbs from '../hotels-breadcrumbs/hotels-breadcrumbs';
import HotelsCarousel from '../hotels-carousel/hotels-carousel';
import HotelsList from '../hotels-list/hotels-list';

const HotelsSection = (): JSX.Element => {
	const images = useAppSelector(selectHotelsCarouselImages);

	return (
		<div className="checker__hotels content-item">
			<HotelsBreadcrumbs />
			<HotelsCarousel images={images} />
			<HotelsList />
		</div>
	);
}

export default HotelsSection;


