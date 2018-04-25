import ClayPagination from '../ClayPagination';

let consoleErrorReference;
let component;

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayPagination', function() {
	beforeEach(() => {
		consoleErrorReference = console.error;
	});

	afterEach(() => {
		if (component) {
			component.dispose();
		}

		console.error = consoleErrorReference;
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
			it(`should render a ClayPagination with ${totalPages} total pages and page ${currentPage} as current page`, () => {
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
			it(`should render a ClayPagination with baseHref, ${totalPages} total pages and page ${currentPage} as current page`, () => {
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
		mockConsoleError();

		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				spritemap: spritemap,
				totalPages: 10,
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				currentPage: 1,
				totalPages: 10,
			});
		}).toThrow();
	});

	it('should fail when no totalPages is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPagination({
				baseHref: '#mySite?curPage=',
				currentPage: 1,
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
