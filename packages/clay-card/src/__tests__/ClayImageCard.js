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
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with classes', () => {
		component = new ClayImageCard({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with id', () => {
		component = new ClayImageCard({
			id: 'myId',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with actionItems', () => {
		component = new ClayImageCard({
			actionItems: actionItems,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayImageCard', () => {
		component = new ClayImageCard({
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayImageCard', () => {
		component = new ClayImageCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayImageCard', () => {
		component = new ClayImageCard({
			disabled: true,
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayImageCard with input `name`', () => {
		component = new ClayImageCard({
			inputName: 'checkbox01',
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayImageCard with input `value`', () => {
		component = new ClayImageCard({
			inputName: 'checkbox',
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with icon', () => {
		component = new ClayImageCard({
			icon: 'documents',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with imageAlt', () => {
		component = new ClayImageCard({
			imageAlt: 'thumbnail',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with imageSrc', () => {
		component = new ClayImageCard({
			imageSrc: 'thumbnail_coffee.jpg',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with one label', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
				},
			],
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with two labels', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
				},
				{
					label: 'Pending',
				},
			],
			spritemap: spritemap,
			title: 'My Title',
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
			title: 'My Title',
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
			title: 'My Title',
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
			title: 'My Title',
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
			title: 'My Title',
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
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with two labels with styles', () => {
		component = new ClayImageCard({
			labels: [
				{
					label: 'Approved',
					style: 'warning',
				},
				{
					label: 'Peding',
					style: 'danger',
				},
			],
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with subtitle', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			subtitle: 'Author Action',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `danger color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'danger',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `dark color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'dark',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `info color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'info',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `light color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'light',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `primary color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'primary',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `secondary color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'secondary',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `success color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'success',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with file type `warning color`', () => {
		component = new ClayImageCard({
			fileType: 'DOC',
			fileTypeStyle: 'warning',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with url', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			title: 'My Title',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			component = new ClayImageCard();
		}).toThrow();
	});
});
