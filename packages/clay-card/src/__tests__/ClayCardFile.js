import ClayCardFile from '../ClayCardFile';

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

describe('ClayCardFile', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayCardFile({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with classes', () => {
		component = new ClayCardFile({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with id', () => {
		component = new ClayCardFile({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with actionsItems', () => {
		component = new ClayCardFile({
			actionsItems: actionsItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with checkbox checked', () => {
		component = new ClayCardFile({
			checkbox: {
				checked: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with checkbox disabled', () => {
		component = new ClayCardFile({
			checkbox: {
				checked: true,
				disabled: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with checkbox indeterminate', () => {
		component = new ClayCardFile({
			checkbox: {
				indeterminate: true,
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with checkbox `name`', () => {
		component = new ClayCardFile({
			checkbox: {
				checked: true,
				name: 'checkbox01',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with checkbox `value`', () => {
		component = new ClayCardFile({
			checkbox: {
				checked: true,
				value: 'checkbox',
			},
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with icon', () => {
		component = new ClayCardFile({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with label', () => {
		component = new ClayCardFile({
			label: 'Approved',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with labelStyle `danger color`', () => {
		component = new ClayCardFile({
			label: 'Approved',
			labelStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with labelStyle `info color`', () => {
		component = new ClayCardFile({
			label: 'Approved',
			labelStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with labelStyle `secondary color`', () => {
		component = new ClayCardFile({
			label: 'Approved',
			labelStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with labelStyle `success color`', () => {
		component = new ClayCardFile({
			label: 'Approved',
			labelStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with labelStyle `warning color`', () => {
		component = new ClayCardFile({
			label: 'Approved',
			labelStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with subtitle', () => {
		component = new ClayCardFile({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with title', () => {
		component = new ClayCardFile({
			subtitle: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type', () => {
		component = new ClayCardFile({
			type: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `danger color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `dark color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `info color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `light color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `primary color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `secondary color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `success color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with type `warning color`', () => {
		component = new ClayCardFile({
			type: 'DOC',
			typeStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayCardFile with url', () => {
		component = new ClayCardFile({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
