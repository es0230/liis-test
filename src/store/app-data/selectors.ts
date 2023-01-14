import dayjs from 'dayjs';
import { NameSpace } from '../../const';
import { RootState } from '../../types/state';

const CURRENCY = 'rub';

export const selectCity = (state: RootState): string => state[NameSpace.Data].location;
export const selectURLRequest = (state: RootState): string => {
	const { location, checkIn, duration } = state[NameSpace.Data];

	const checkOut = dayjs(checkIn).add(duration, 'day').format('YYYY-MM-DD');

	return `cache.json?location=${location}&currency=${CURRENCY}&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
}