import ClayFileCard from '../ClayFileCard';

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

describe('ClayFileCard', function() {
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

	it('should render a selectable ClayFileCard', () => {
		component = new ClayFileCard({
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable selected ClayFileCard', () => {
		component = new ClayFileCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable disabled ClayFileCard', () => {
		component = new ClayFileCard({
			disabled: true,
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayFileCard with input `name`', () => {
		component = new ClayFileCard({
			inputName: 'checkbox01',
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayFileCard with input `value`', () => {
		component = new ClayFileCard({
			inputValue: 'checkbox',
			selectable: true,
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

	it('should render a ClayFileCard with one label', () => {
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

	it('should render a ClayFileCard with two labels', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with two labels with styles', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'warning',
				},
				{
					label: 'Pending',
					style: 'danger',
				},
			],
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labels with styles mapped with labelStylesMap', () => {
		component = new ClayFileCard({
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

	it('should render a ClayFileCard with subtitle', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			subtitle: 'Author Action',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker shape `circle`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerShape: 'circle',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker shape `rounded`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerShape: 'rounded',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `danger color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'danger',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `dark color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'dark',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `info color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'info',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `light color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'light',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `primary color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'primary',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `secondary color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'secondary',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `success color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'success',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with sticker style `warning color`', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			stickerLabel: 'DOC',
			stickerStyle: 'warning',
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with href', () => {
		component = new ClayFileCard({
			href: '#1',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayFileCard and emit an event on item toggle', () => {
		component = new ClayFileCard({
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});

	it('should fail when no spritemap is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayFileCard({
				title: 'My Title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayFileCard({
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
