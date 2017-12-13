import ClayList from '../ClayList';

let component;

describe('ClayList', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayList({
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with classes', () => {
		component = new ClayList({
			elementClasses: 'my-custom-class',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with id', () => {
		component = new ClayList({
			id: 'myId',
			items: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList', () => {
		component = new ClayList({
			items: [
				{
					description: 'Description 1',
					href: '#1',
					title: 'Item 1',
				},
				{
					description: 'Description 2',
					href: '#2',
					title: 'Item 2',
				},
				{
					description: 'Description 3',
					href: '#3',
					title: 'Item 3',
				},
			],
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with header title', () => {
		component = new ClayList({
			items: [
				{
					title: 'Item 1',
				},
			],
			title: 'Group Header 1',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayList({
			events: {itemToggled: spy},
			items: [
				{
					title: 'Item 1',
				},
			],
			selectable: true,
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no items are passed', function() {
		expect(() => {
			component = new ClayList();
		}).toThrow();
	});
});
