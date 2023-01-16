import dayjs from 'dayjs';
import { NameSpace } from '../../const';
import { FavoriteHotel } from '../../types/favorite-hotel';
import { FavoritesFilter } from '../../types/favorites-filter';
import { Hotel } from '../../types/hotels';
import { QueryData } from '../../types/query-data';
import { RootState } from '../../types/state';

const CURRENCY = 'rub';

export const selectCity = (state: RootState): string => state[NameSpace.Data].location;

export const selectHotels = (state: RootState): Hotel[] => state[NameSpace.Data].hotels;

export const selectCheckIn = (state: RootState): string => state[NameSpace.Data].checkIn;

export const selectDuration = (state: RootState): number => state[NameSpace.Data].duration;

export const selectFavoriteHotels = (state: RootState): FavoriteHotel[] => state[NameSpace.Data].favoriteHotels;

export const selectFavoritesFilter = (state: RootState): FavoritesFilter => state[NameSpace.Data].favoritesFilter;

export const selectURLRequest = (state: RootState): string => {
	const { location, checkIn, duration } = state[NameSpace.Data];

	const checkOut = dayjs(checkIn).add(duration, 'day').format('YYYY-MM-DD');

	return `cache.json?location=${location}&currency=${CURRENCY}&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
};

export const selectInitialQueryData = (state: RootState): QueryData => {
	const { location, checkIn, duration } = state[NameSpace.Data];

	return { location, checkIn, duration };
};
