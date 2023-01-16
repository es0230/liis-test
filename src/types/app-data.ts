import { FavoriteHotel } from './favorite-hotel';
import { Hotel } from './hotels';

export type AppData = {
	location: string;
	checkIn: string;
	duration: number,
	hotels: Hotel[],
	favoriteHotels: FavoriteHotel[],
};
