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

export { QueryFormFields, AppRoute, NameSpace, FilterOrders, FilterTypes };