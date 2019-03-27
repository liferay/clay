import ClayUserCard from '../ClayUserCard';

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

describe('ClayUserCard', function() {
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
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with classes', () => {
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with id', () => {
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with actionItems', () => {
		component = new ClayUserCard({
			actionItems: actionItems,
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with actionItems and actionAriaLabel', () => {
		component = new ClayUserCard({
			actionAriaLabel: 'toggle actions',
			actionItems: actionItems,
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard', () => {
		component = new ClayUserCard({
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayUserCard', () => {
		component = new ClayUserCard({
			name: 'User Name',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayUserCard', () => {
		component = new ClayUserCard({
			disabled: true,
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard with input `name`', () => {
		component = new ClayUserCard({
			inputName: 'checkbox01',
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard with input `value`', () => {
		component = new ClayUserCard({
			inputValue: 'checkbox',
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageAlt', () => {
		component = new ClayUserCard({
			imageAlt: 'thumbnail',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with imageSrc', () => {
		component = new ClayUserCard({
			imageSrc: 'thumbnail_coffee.jpg',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with subtitle', () => {
		component = new ClayUserCard({
			name: 'User Name',
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user default icon', () => {
		component = new ClayUserCard({
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user icon', () => {
		component = new ClayUserCard({
			icon: 'camera',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with user user color class', () => {
		component = new ClayUserCard({
			name: 'User Name',
			userColorClass: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayUserCard with href', () => {
		component = new ClayUserCard({
			href: '#1',
			name: 'User Name',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayUserCard and emit an event on item toggle', () => {
		component = new ClayUserCard({
			name: 'User Name',
			selectable: true,
			spritemap: spritemap,
		});

		const spy = jest.spyOn(component, 'emit');

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('itemToggled', expect.any(Object));
	});

	it('should fail when no name is passed', function() {
		mockConsoleError();

		expect(() => {
			component = new ClayUserCard();
		}).toThrow();
	});
});
