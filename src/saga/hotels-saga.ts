import { createAPI } from '../services/api';
import { put, takeEvery, } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { selectURLRequest } from '../store/app-data/selectors';
import { store } from '../store';
import { Hotel } from '../types/hotels';
import { setHotels, fetchHotels, setHotelsFetchFailed } from '../store/app-data/app-data';

const api = createAPI();

const fetchHotelsData = () => api.get<Hotel[]>(selectURLRequest(store.getState()));

function* fetchHotelsWorker() {
	try {
		const result = yield* call(fetchHotelsData);
		if (result.status === 200) {
			yield put(setHotels(result.data));
		} else {
			throw new Error(result.statusText);
		}
	} catch (err) {
		yield put(setHotelsFetchFailed());
	}
}

export function* hotelsWatcher() {
	yield takeEvery(fetchHotels.type, fetchHotelsWorker);
}
