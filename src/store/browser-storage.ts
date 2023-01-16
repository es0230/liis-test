import { RootState } from '../types/state';
import { LOCAL_STORAGE_KEY } from '../const';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (!serializedState) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export async function saveState(state: RootState) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
	} catch (err) {

	}
};