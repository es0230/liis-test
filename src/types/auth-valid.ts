import { AuthDataFields } from '../const';

export type AuthValid = {
	[AuthDataFields.Email]: boolean | null,
	[AuthDataFields.Password]: boolean | null,
};
