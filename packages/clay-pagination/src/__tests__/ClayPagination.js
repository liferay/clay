import ClayPagination from '../ClayPagination';

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

let component;

describe('ClayPagination', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayPagination({
			currentPage: 1,
			spritemap: spritemap,
			totalPages: 10,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPagination with classes', () => {
		component = new ClayPagination({
			currentPage: 1,
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
			totalPages: 10,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPagination with id', () => {
		component = new ClayPagination({
			currentPage: 1,
			id: 'myId',
			spritemap: spritemap,
			totalPages: 10,
		});

		expect(component).toMatchSnapshot();
	});

	for (let totalPages = 1; totalPages <= 10; totalPages++) {
		for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
			it(`should render a ClayPagination with ${
				totalPages
			} total pages and page ${currentPage} as current page`, () => {
				component = new ClayPagination({
					currentPage: currentPage,
					spritemap: spritemap,
					totalPages: totalPages,
				});
				expect(component).toMatchSnapshot();
			});
		}
	}

	for (let totalPages = 1; totalPages <= 10; totalPages++) {
		for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
			it(`should render a ClayPagination with baseHref, ${
				totalPages
			} total pages and page ${currentPage} as current page`, () => {
				component = new ClayPagination({
					baseHref: '#mySite?curPage=',
					currentPage: currentPage,
					spritemap: spritemap,
					totalPages: totalPages,
				});
				expect(component).toMatchSnapshot();
			});
		}
	}

	it('should fail when no currentPage is passed', function() {
		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				spritemap: spritemap,
				totalPages: 10,
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				currentPage: 1,
				totalPages: 10,
			});
		}).toThrow();
	});

	it('should fail when no totalPages is passed', function() {
		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				currentPage: 1,
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
