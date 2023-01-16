enum AppRoute {
	Auth = '/auth',
	Checker = '/checker',
	Unknown = '/*'
}

enum NameSpace {
	Data = 'DATA',
	User = 'USER',
}

enum FilterTypes {
	Rating = 'rating',
	Price = 'price',
}

enum FilterOrders {
	Asc = 'asc',
	Desc = 'desc',
}

enum QueryFormFields {
	Location = 'location',
	CheckIn = 'checkIn',
	Duration = 'duration',
}

const getNumberedString = (duration: number, [w1, w2, w5]: string[]) => {
	if (`${duration}`.at(-1) === '0' || (duration >= 5 && duration <= 19)) {
		return `${duration} ${w5}`;
	}
	if (`${duration}`.at(-1) === '2' || `${duration}`.at(-1) === '3' || `${duration}`.at(-1) === '4') {
		return `${duration} ${w2}`;
	}
	return `${duration} ${w1}`;
};

enum AuthDataFields {
	Email = 'email',
	Password = 'password',
}

const LOCAL_STORAGE_KEY = 'auth';

const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const PASSWORD_REGEXP = /^(?=.*[a-zA-Z0-9])(?=.{8,}$)/;

export { EMAIL_REGEXP, PASSWORD_REGEXP, AuthDataFields, LOCAL_STORAGE_KEY, getNumberedString, QueryFormFields, AppRoute, NameSpace, FilterOrders, FilterTypes };