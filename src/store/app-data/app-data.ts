import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { NameSpace } from '../../const'
import { AppData } from '../../types/app-data';
import { FavoriteHotel } from '../../types/favorite-hotel';
import { Hotel } from '../../types/hotels';
import { QueryData } from '../../types/query-data';

const initialState: AppData = {
	location: 'Moscow',
	checkIn: dayjs().format('YYYY-MM-DD'),
	duration: 1,
	hotels: [],
	favoriteHotels: [],
}


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
			]
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
		}
	},
});

export const { addToFavorites, deleteFromFavorites, setHotels, fetchHotels, setQueryData } = appData.actions;