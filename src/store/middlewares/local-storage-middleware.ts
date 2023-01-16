
import { Middleware } from '@reduxjs/toolkit';
import { deleteState } from '../browser-storage';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const localStorageMiddleware: Middleware<unknown, Reducer> =
	(_store) =>
		(next) =>
			(action) => {
				if (action.type === 'USER/logOut') {
					deleteState();
				}

				return next(action);
			};
