import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { FilterOrders, FilterTypes, NameSpace } from '../../const';
import { AppData } from '../../types/app-data';
import { FavoriteHotel } from '../../types/favorite-hotel';
import { FavoritesFilter } from '../../types/favorites-filter';
import { Hotel } from '../../types/hotels';
import { QueryData } from '../../types/query-data';

const INITIAL_CITY = 'Москва';
const INITIAL_DURATION = 1;

const initialState: AppData = {
	location: INITIAL_CITY,
	checkIn: dayjs().format('YYYY-MM-DD'),
	duration: INITIAL_DURATION,
	hotels: [],
	favoriteHotels: [],
	favoritesFilter: {
		type: FilterTypes.Rating,
		order: FilterOrders.Asc
	},
	hotelsCarouselImages: [
		'./img/carousel-images/carousel-1.jpg',
		'./img/carousel-images/carousel-2.jpg',
		'./img/carousel-images/carousel-3.jpg',
		'./img/carousel-images/carousel-4.jpg'
	],
};


export const appData = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<FavoriteHotel>) => {
			state.favoriteHotels.push(action.payload);
		},
		deleteFromFavorites: (state, action: PayloadAction<FavoriteHotel>) => {
			const target = state.favoriteHotels.findIndex((el) => el.hotel.hotelId === action.payload.hotel.hotelId && el.checkIn === action.payload.checkIn);
			state.favoriteHotels = [
				...state.favoriteHotels.slice(0, target),
				...state.favoriteHotels.slice(target + 1),
			];
		},
		setFavoritesFilter: (state, action: PayloadAction<FavoritesFilter>) => {
			state.favoritesFilter = action.payload;
		},
		setQueryData: (state, action: PayloadAction<QueryData>) => {
			const { location, checkIn, duration } = action.payload;
			state.location = location;
			state.checkIn = checkIn;
			state.duration = duration;
		},
		setHotels: (state, action: PayloadAction<Hotel[]>) => {
			state.hotels = action.payload;
		},
		fetchHotels: (state) => {
			return state;
		},
		resetHotels: (state) => {
			state.hotels = [];
		},
		resetState: (state) => {
			state.location = INITIAL_CITY;
			state.checkIn = dayjs().format('YYYY-MM-DD');
			state.duration = INITIAL_DURATION;
			state.hotels = [];
			state.favoriteHotels = [];
			state.favoritesFilter = {
				type: FilterTypes.Rating,
				order: FilterOrders.Asc
			};
		}
	},
});

export const { resetHotels, resetState, setFavoritesFilter, addToFavorites, deleteFromFavorites, setHotels, fetchHotels, setQueryData } = appData.actions;

export { initialState as appDataInitialState };