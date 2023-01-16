
import { Middleware } from '@reduxjs/toolkit';
import { store } from '..';
import { deleteState, saveState } from '../browser-storage';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const localStorageMiddleware: Middleware<unknown, Reducer> =
	(_store) =>
		(next) =>
			(action) => {
				if (action.type === 'USER/logOut') {
					deleteState();

					return next(action);
				}
				saveState(store.getState());

				return next(action);
			};

//const localStorageMiddleware: Middleware<unknown, Reducer> = ({ getState }: typeof store) => {
//	return (next: Dispatch) => <A extends Action>(action: A) => {
//		if (action.type === 'USER/logOut') {
//			localStorage.removeItem(LOCAL_STORAGE_KEY);
//		}
//		const result = next(action);
//		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(
//			getState()
//		));
//		console.log('lol');
//		return result;
//	};
//};
