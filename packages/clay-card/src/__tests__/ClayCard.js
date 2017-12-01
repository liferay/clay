import ClayCard from '../ClayCard';

let component;
let spritemap = 'icons.svg';
let actionsItems = [
	{
		label: 'Edit',
		url: '#1',
	},
	{
		label: 'Save',
		url: '#1',
	},
];

describe('ClayCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCard({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with classes', () => {
		component = new ClayCard({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with id', () => {
		component = new ClayCard({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with actionsItems', () => {
		component = new ClayCard({
			actionsItems: actionsItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with checkbox checked', () => {
		component = new ClayCard({
			checkbox: {
				checked: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with checkbox disabled', () => {
		component = new ClayCard({
			checkbox: {
				checked: true,
				disabled: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with checkbox indeterminate', () => {
		component = new ClayCard({
			checkbox: {
				indeterminate: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with checkbox `name`', () => {
		component = new ClayCard({
			checkbox: {
				checked: true,
				name: 'checkbox01',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with checkbox `value`', () => {
		component = new ClayCard({
			checkbox: {
				checked: true,
				value: 'checkbox',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with icon', () => {
		component = new ClayCard({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with imageAlt', () => {
		component = new ClayCard({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with imageSrc', () => {
		component = new ClayCard({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with label', () => {
		component = new ClayCard({
			label: 'Approved',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with labelStyle `danger color`', () => {
		component = new ClayCard({
			label: 'Approved',
			labelStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with labelStyle `info color`', () => {
		component = new ClayCard({
			label: 'Approved',
			labelStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with labelStyle `secondary color`', () => {
		component = new ClayCard({
			label: 'Approved',
			labelStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with labelStyle `success color`', () => {
		component = new ClayCard({
			label: 'Approved',
			labelStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with labelStyle `warning color`', () => {
		component = new ClayCard({
			label: 'Approved',
			labelStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with subtitle', () => {
		component = new ClayCard({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with title', () => {
		component = new ClayCard({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type', () => {
		component = new ClayCard({
			type: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `danger color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `dark color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `info color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `light color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `primary color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `secondary color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `success color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with type `warning color`', () => {
		component = new ClayCard({
			type: 'DOC',
			typeStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCard with url', () => {
		component = new ClayCard({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
