import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { NameSpace } from '../../const'
import { AppData } from '../../types/app-data';
import { Hotel } from '../../types/hotels';
import { QueryData } from '../../types/query-data';

const initialState: AppData = {
	location: 'Moscow',
	checkIn: dayjs().format('YYYY-MM-DD'),
	duration: 1,
	hotels: [],
}


export const appData = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {
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

export const { setHotels, fetchHotels, setQueryData } = appData.actions;