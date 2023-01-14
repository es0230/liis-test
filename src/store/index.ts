import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootWatcher } from '../saga';
import { rootReducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (middleware) =>
		middleware({
			thunk: false,
			serializableCheck: false,
		}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);
