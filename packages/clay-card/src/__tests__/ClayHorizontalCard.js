import ClayHorizontalCard from '../ClayHorizontalCard';

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

describe('ClayHorizontalCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayHorizontalCard({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with classes', () => {
		component = new ClayHorizontalCard({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with id', () => {
		component = new ClayHorizontalCard({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with actionItems', () => {
		component = new ClayHorizontalCard({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with checkbox checked', () => {
		component = new ClayHorizontalCard({
			checkbox: {
				checked: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with checkbox disabled', () => {
		component = new ClayHorizontalCard({
			checkbox: {
				checked: true,
				disabled: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with checkbox indeterminate', () => {
		component = new ClayHorizontalCard({
			checkbox: {
				indeterminate: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with checkbox `name`', () => {
		component = new ClayHorizontalCard({
			checkbox: {
				checked: true,
				name: 'checkbox01',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with checkbox `value`', () => {
		component = new ClayHorizontalCard({
			checkbox: {
				checked: true,
				value: 'checkbox',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with title', () => {
		component = new ClayHorizontalCard({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with url', () => {
		component = new ClayHorizontalCard({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
