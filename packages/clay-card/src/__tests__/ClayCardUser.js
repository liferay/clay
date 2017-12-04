import ClayCardUser from '../ClayCardUser';

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

describe('ClayCardUser', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with classes', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with id', () => {
		component = new ClayCardUser({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with actionItems', () => {
		component = new ClayCardUser({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with checkbox checked', () => {
		component = new ClayCardUser({
			checkbox: {
				checked: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with checkbox disabled', () => {
		component = new ClayCardUser({
			checkbox: {
				checked: true,
				disabled: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with checkbox indeterminate', () => {
		component = new ClayCardUser({
			checkbox: {
				indeterminate: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with checkbox `name`', () => {
		component = new ClayCardUser({
			checkbox: {
				checked: true,
				name: 'checkbox01',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with checkbox `value`', () => {
		component = new ClayCardUser({
			checkbox: {
				checked: true,
				value: 'checkbox',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with icon', () => {
		component = new ClayCardUser({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with imageAlt', () => {
		component = new ClayCardUser({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with imageSrc', () => {
		component = new ClayCardUser({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with label', () => {
		component = new ClayCardUser({
			label: 'Approved',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with labelStyle `danger color`', () => {
		component = new ClayCardUser({
			label: 'Approved',
			labelStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with labelStyle `info color`', () => {
		component = new ClayCardUser({
			label: 'Approved',
			labelStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with labelStyle `secondary color`', () => {
		component = new ClayCardUser({
			label: 'Approved',
			labelStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with labelStyle `success color`', () => {
		component = new ClayCardUser({
			label: 'Approved',
			labelStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with labelStyle `warning color`', () => {
		component = new ClayCardUser({
			label: 'Approved',
			labelStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with subtitle', () => {
		component = new ClayCardUser({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with title', () => {
		component = new ClayCardUser({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type', () => {
		component = new ClayCardUser({
			type: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `danger color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `dark color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `info color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `light color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `primary color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `secondary color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `success color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with type `warning color`', () => {
		component = new ClayCardUser({
			type: 'DOC',
			typeStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardUser with url', () => {
		component = new ClayCardUser({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
