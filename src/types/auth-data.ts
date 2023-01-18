import { AuthDataFields } from '../const';

export type AuthData = {
	[AuthDataFields.Email]: string,
	[AuthDataFields.Password]: string,
}