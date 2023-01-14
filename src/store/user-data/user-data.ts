import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
	isAuthorized: false,
};

export const userData = createSlice({
	name: NameSpace.User,
	initialState,
	reducers: {

	}
});
