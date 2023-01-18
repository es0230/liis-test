import { FavoriteHotel } from './favorite-hotel';
import { FavoritesFilter } from './favorites-filter';
import { Hotel } from './hotels';

export type AppData = {
	location: string;
	checkIn: string;
	duration: string,
	hotels: Hotel[],
	favoriteHotels: FavoriteHotel[],
	favoritesFilter: FavoritesFilter,
	hotelsCarouselImages: string[],
	hotelsLoading: boolean,
	hotelsFetchFailed: boolean,
};
