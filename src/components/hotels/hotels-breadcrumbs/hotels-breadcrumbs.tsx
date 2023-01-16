import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCheckIn, selectCity } from '../../../store/app-data/selectors';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const HotelsBreadcrumbs = (): JSX.Element => {
	const currentCity = useAppSelector(selectCity);
	const checkIn = useAppSelector(selectCheckIn);

	return (
		<div className="checker__hotels-header">
			<div className="checker__hotels-breadcrumbs">
				<div className="breadcrumbs__common">Отели</div>
				<ChevronRightIcon sx={{ fontSize: "xxx-large", margin: "0 -16px", color: "#A7A7A7" }} />
				<div className="breadcrumbs__location">{currentCity}</div>
			</div>
			<div className="checker__hotels-date">{dayjs(checkIn).locale('ru').format('DD MMMM YYYY')}</div>
		</div>
	);
};

export default HotelsBreadcrumbs;
