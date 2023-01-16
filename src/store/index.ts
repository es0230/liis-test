import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootWatcher } from '../saga';
import { rootReducer } from './root-reducer';
import { loadState } from './browser-storage';
import { localStorageMiddleware } from './middlewares/local-storage-middleware';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (middleware) =>
		middleware({
			thunk: false,
			serializableCheck: false,
		}).concat(...[sagaMiddleware, localStorageMiddleware]),
	preloadedState: loadState(),
});

sagaMiddleware.run(rootWatcher);
