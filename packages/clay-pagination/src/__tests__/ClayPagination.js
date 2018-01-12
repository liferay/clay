import ClayPagination from '../ClayPagination';

let component;

describe('ClayPagination', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayPagination();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPagination with classes', () => {
		component = new ClayPagination({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPagination with id', () => {
		component = new ClayPagination({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
