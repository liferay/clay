import ClayImageCard from '../ClayImageCard';

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

describe('ClayImageCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with classes', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with id', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with actionItems', () => {
		component = new ClayImageCard({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayImageCard', () => {
		component = new ClayImageCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayImageCard', () => {
		component = new ClayImageCard({
			disabled: true,
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with input `name`', () => {
		component = new ClayImageCard({
			inputName: 'checkbox01',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with input `value`', () => {
		component = new ClayImageCard({
			inputName: 'checkbox',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with icon', () => {
		component = new ClayImageCard({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with imageAlt', () => {
		component = new ClayImageCard({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with imageSrc', () => {
		component = new ClayImageCard({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with label', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with labelStyle `danger color`', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'danger',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with labelStyle `info color`', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'info',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with labelStyle `secondary color`', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'secondary',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with labelStyle `success color`', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'success',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with labelStyle `warning color`', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'warning',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with subtitle', () => {
		component = new ClayImageCard({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with title', () => {
		component = new ClayImageCard({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `danger color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `dark color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `info color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `light color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `primary color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `secondary color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `success color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with type `warning color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with url', () => {
		component = new ClayImageCard({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
