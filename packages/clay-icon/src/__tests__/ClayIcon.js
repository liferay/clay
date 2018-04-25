import ClayIcon from '../ClayIcon';

const spritemap = '../node_modules/clay-css/lib/images/icons/icons.svg';

let clayIcon;

describe('ClayIcon', function() {
	afterEach(() => {
		if (clayIcon) {
			clayIcon.dispose();
		}
	});

	it('should render markup for icon `add-cell`', () => {
		clayIcon = new ClayIcon({
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with classes', () => {
		clayIcon = new ClayIcon({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with id', () => {
		clayIcon = new ClayIcon({
			id: 'myId',
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with specified title', () => {
		clayIcon = new ClayIcon({
			title: 'myTitle',
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with specified title when id is passed too', () => {
		clayIcon = new ClayIcon({
			id: 'myId',
			title: 'myTitle',
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with focusable to true', () => {
		clayIcon = new ClayIcon({
			focusable: true,
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});

	it('should render an icon with focusable to false by default', () => {
		clayIcon = new ClayIcon({
			spritemap: spritemap,
			symbol: 'add-cell',
		});

		expect(clayIcon).toMatchSnapshot();
	});
});
