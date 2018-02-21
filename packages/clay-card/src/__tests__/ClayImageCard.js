import ClayImageCard from '../ClayImageCard';

let component;
let consoleErrorReference;
let spritemap = 'icons.svg';
let actionItems = [
	{
		href: '#1',
		label: 'Edit',
	},
	{
		href: '#1',
		label: 'Save',
	},
];

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

describe('ClayImageCard', function() {
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
				'Pending',
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

	it('should render a ClayImageCard with labels with styles mapped with labelStylesMap', () => {
		component = new ClayImageCard({
			labels: ['Approved', 'Pending', 'Error'],
			labelStylesMap: {
				'Approved': 'success',
				'Pending': 'warning',
				'*': 'danger',
			},
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

	it('should render a ClayImageCard with sticker', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker shape `circle`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerShape: 'circle',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker shape `rounded`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerShape: 'rounded',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `danger color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'danger',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `dark color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'dark',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `info color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'info',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `light color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'light',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `primary color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'primary',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `secondary color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'secondary',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `success color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'success',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with sticker style `warning color`', () => {
		component = new ClayImageCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'warning',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayImageCard with href', () => {
		component = new ClayImageCard({
			href: '#1',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayImageCard and emit an event on item toggle', () => {
		component = new ClayImageCard({
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});

	it('should fail when no title is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayImageCard();
		}).toThrow();
	});
});
