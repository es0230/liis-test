import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HotelsBreadcrumbs = (): JSX.Element => {
	return (
		<div className="checker__hotels-header">
			<div className="checker__hotels-breadcrumbs">
				<div className="breadcrumbs__common">Отели</div>
				<ChevronRightIcon sx={{ fontSize: "xxx-large", margin: "0 -16px", color: "#A7A7A7" }} />
				<div className="breadcrumbs__location">Москва</div>
			</div>
			<div className="checker__hotels-date">07 июля 2020</div>
		</div>
	);
};

export default HotelsBreadcrumbs;
