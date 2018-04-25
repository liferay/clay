import ClayPaginationBar from '../ClayPaginationBar';

let consoleErrorReference;

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

const entries = [
	{
		href: '#mySite?entries=5',
		label: 5,
	},
	{
		active: true,
		href: '#mySite?entries=10',
		label: 10,
	},
	{
		href: '#mySite?entries=15',
		label: 15,
	},
	{
		href: '#mySite?entries=20',
		label: 20,
	},
];

let component;

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayPaginationBar', function() {
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
		component = new ClayPaginationBar({
			baseHref: '#mySite?curPage=',
			currentPage: 1,
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 20,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with classes', () => {
		component = new ClayPaginationBar({
			currentPage: 1,
			elementClasses: 'my-custom-class',
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 20,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with id', () => {
		component = new ClayPaginationBar({
			currentPage: 1,
			entries: entries,
			id: 'myId',
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 20,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with baseHref', () => {
		component = new ClayPaginationBar({
			currentPage: 1,
			baseHref: '#mySite?curPage=',
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 20,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with one item more than selected entry multiple', () => {
		component = new ClayPaginationBar({
			currentPage: 2,
			baseHref: '#mySite?curPage=',
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 21,
		});

		expect(component).toMatchSnapshot();

		component = new ClayPaginationBar({
			currentPage: 3,
			baseHref: '#mySite?curPage=',
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 21,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with one item less than selected entry multiple', () => {
		component = new ClayPaginationBar({
			currentPage: 2,
			baseHref: '#mySite?curPage=',
			entries: entries,
			selectedEntry: 1,
			spritemap: spritemap,
			totalEntries: 19,
		});

		expect(component).toMatchSnapshot();
	});

	it('should fail when no currentPage is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPaginationBar({
				baseHref: '#mySite?curPage=',
				entries: entries,
				selectedEntry: 1,
				spritemap: spritemap,
				totalEntries: 20,
			});
		}).toThrow();
	});

	it('should fail when no entries are passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPaginationBar({
				currentPage: 1,
				baseHref: '#mySite?curPage=',
				selectedEntry: 1,
				spritemap: spritemap,
				totalEntries: 20,
			});
		}).toThrow();
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPaginationBar({
				currentPage: 1,
				baseHref: '#mySite?curPage=',
				entries: entries,
				selectedEntry: 1,
				totalEntries: 20,
			});
		}).toThrow();
	});

	it('should fail when no totalEntries is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayPaginationBar({
				currentPage: 1,
				baseHref: '#mySite?curPage=',
				entries: entries,
				selectedEntry: 1,
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
