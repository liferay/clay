import ClayTable from '../ClayTable';

let component;

describe('ClayTable', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayTable();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with classes', () => {
		component = new ClayTable({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayTable with id', () => {
		component = new ClayTable({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
