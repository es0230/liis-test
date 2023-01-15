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

export { AppRoute, NameSpace, FilterOrders, FilterTypes };