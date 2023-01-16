import { Hotel } from './hotels';

export type AppData = {
	location: string;
	checkIn: string;
	duration: number,
	hotels: Hotel[],
};
