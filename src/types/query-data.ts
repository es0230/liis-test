import { QueryFormFields } from '../const';

export type QueryData = {
	[QueryFormFields.Location]: string,
	[QueryFormFields.CheckIn]: string,
	[QueryFormFields.Duration]: string
};
