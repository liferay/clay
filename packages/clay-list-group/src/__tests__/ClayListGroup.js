import ClayListGroup from '../ClayListGroup';

let component;

describe('ClayListGroup', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayListGroup();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with classes', () => {
		component = new ClayListGroup({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayListGroup with id', () => {
		component = new ClayListGroup({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
