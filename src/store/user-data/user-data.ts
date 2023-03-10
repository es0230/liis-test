import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UserData } from '../../types/user-data';

const initialState: UserData = {
	isAuthorized: false,
};

export const userData = createSlice({
	name: NameSpace.User,
	initialState,
	reducers: {
		logIn: (state) => {
			state.isAuthorized = true;
		},
		logOut: (state) => {
			state.isAuthorized = false;
		}
	}
});

export const { logIn, logOut } = userData.actions;

export { initialState as userDataInitialState };
