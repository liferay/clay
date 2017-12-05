import ClayFileCard from '../ClayFileCard';

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

describe('ClayFileCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with classes', () => {
		component = new ClayFileCard({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with id', () => {
		component = new ClayFileCard({
			id: 'myId',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with actionItems', () => {
		component = new ClayFileCard({
			actionItems: actionItems,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayFileCard', () => {
		component = new ClayFileCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayFileCard', () => {
		component = new ClayFileCard({
			disabled: true,
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with input `name`', () => {
		component = new ClayFileCard({
			inputName: 'checkbox01',
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with input `value`', () => {
		component = new ClayFileCard({
			inputValue: 'checkbox',
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with icon', () => {
		component = new ClayFileCard({
			icon: 'documents',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with label', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with labelStyle `danger color`', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with labelStyle `info color`', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with labelStyle `secondary color`', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with labelStyle `success color`', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with labelStyle `warning color`', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with subtitle', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			subtitle: 'Author Action',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `danger color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'danger',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `dark color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'dark',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `info color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'info',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `light color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'light',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `primary color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'primary',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `secondary color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'secondary',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `success color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'success',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with file type style `warning color`', () => {
		component = new ClayFileCard({
			fileType: 'DOC',
			fileTypeStyle: 'warning',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with url', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			title: 'My Title',
			url: '#1',
		});

		expect(component).toMatchSnapshot();
	});
});
