import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { NameSpace } from '../../const'

const initialState = {
	location: 'Moscow',
	checkIn: dayjs().format('YYYY-MM-DD'),
	duration: 1,
	hotels: [],
}


export const appData = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {
		setHotels: (state, action) => {
			state.hotels = action.payload;
		},
		fetchHotels: (state) => {

		}
	},
});

export const { setHotels, fetchHotels } = appData.actions;