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
			schema: {},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with classes', () => {
		component = new ClayList({
			elementClasses: 'my-custom-class',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList with id', () => {
		component = new ClayList({
			id: 'myId',
			schema: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList', () => {
		component = new ClayList({
			items: [
				{
					title: 'Star Wars',
				},
			],
			schema: {
				title: 'title',
			},
			selectable: true,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selectable ClayList with groups', () => {
		component = new ClayList({
			items: [
				{
					items: [
						{
							title: 'Star Wars',
						},
					],
					label: 'Movies',
				},
			],
			schema: {
				title: 'title',
			},
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayList and emit an event on item toggled', () => {
		const spy = jest.fn();

		component = new ClayList({
			events: {itemToggled: spy},
			items: [
				{
					title: 'Star Wars',
				},
			],
			schema: {
				title: 'title',
			},
			selectable: true,
		});

		component.element.querySelector('input[type="checkbox"]').click();

		expect(spy).toHaveBeenCalled();
	});

	it('should fail when no schema is passed', function() {
		expect(() => {
			component = new ClayList({
				items: [],
			});
		}).toThrow();
	});
});
