import { createAPI } from '../services/api';
import { put, takeEvery, } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { selectURLRequest } from '../store/app-data/selectors';
import { store } from '../store';
import { Hotel } from '../types/hotels';
import { setHotels, fetchHotels } from '../store/app-data/app-data';

const api = createAPI();

type GetHotelsResponse = {
	data: Hotel[];
};

const fetchHotelsData = () => api.get<GetHotelsResponse>(selectURLRequest(store.getState()));

function* fetchHotelsWorker() {
	const { data } = yield* call(fetchHotelsData);
	yield put(setHotels(data));
}

export function* hotelsWatcher() {
	yield takeEvery(fetchHotels.type, fetchHotelsWorker);
};
