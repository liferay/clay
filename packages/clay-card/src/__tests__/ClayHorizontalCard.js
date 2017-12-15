import ClayHorizontalCard from '../ClayHorizontalCard';

let component;
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

describe('ClayHorizontalCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayHorizontalCard({
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with classes', () => {
		component = new ClayHorizontalCard({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with id', () => {
		component = new ClayHorizontalCard({
			id: 'myId',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with actionItems', () => {
		component = new ClayHorizontalCard({
			actionItems: actionItems,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayHorizontalCard', () => {
		component = new ClayHorizontalCard({
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayHorizontalCard', () => {
		component = new ClayHorizontalCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayHorizontalCard', () => {
		component = new ClayHorizontalCard({
			disabled: true,
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayHorizontalCard with input `name`', () => {
		component = new ClayHorizontalCard({
			inputName: 'checkbox01',
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayHorizontalCard with input `value`', () => {
		component = new ClayHorizontalCard({
			inputValue: 'checkbox',
			selectable: true,
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with href', () => {
		component = new ClayHorizontalCard({
			href: '#1',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayHorizontalCard with a different icon', () => {
		component = new ClayHorizontalCard({
			icon: 'list',
			spritemap: spritemap,
			title: 'My Title',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayHorizontalCard and emit an event on item toggle', () => {
		component = new ClayHorizontalCard({
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
		expect(() => {
			component = new ClayHorizontalCard({
				title: 'My Title',
			});
		}).toThrow();
	});

	it('should fail when no title is passed', function() {
		expect(() => {
			component = new ClayHorizontalCard({
				spritemap: spritemap,
			});
		}).toThrow();
	});
});
