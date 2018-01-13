import ClayPaginationBar from '../ClayPaginationBar';

let component;

describe('ClayPaginationBar', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayPaginationBar();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with classes', () => {
		component = new ClayPaginationBar({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayPaginationBar with id', () => {
		component = new ClayPaginationBar({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
