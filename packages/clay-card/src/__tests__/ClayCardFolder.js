import ClayCardFolder from '../ClayCardFolder';

let component;
let spritemap = 'icons.svg';
let actionItems = [
	{
		label: 'Edit',
		url: '#1',
	},
	{
		label: 'Save',
		url: '#1',
	},
];

describe('ClayCardFolder', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardFolder({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with classes', () => {
		component = new ClayCardFolder({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with id', () => {
		component = new ClayCardFolder({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with actionItems', () => {
		component = new ClayCardFolder({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with checkbox checked', () => {
		component = new ClayCardFolder({
			checkbox: {
				checked: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with checkbox disabled', () => {
		component = new ClayCardFolder({
			checkbox: {
				checked: true,
				disabled: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with checkbox indeterminate', () => {
		component = new ClayCardFolder({
			checkbox: {
				indeterminate: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with checkbox `name`', () => {
		component = new ClayCardFolder({
			checkbox: {
				checked: true,
				name: 'checkbox01',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with checkbox `value`', () => {
		component = new ClayCardFolder({
			checkbox: {
				checked: true,
				value: 'checkbox',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with title', () => {
		component = new ClayCardFolder({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFolder with url', () => {
		component = new ClayCardFolder({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
