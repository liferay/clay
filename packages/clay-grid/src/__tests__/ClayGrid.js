import ClayGrid from '../ClayGrid';

let component;

describe('ClayGrid', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayGrid();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayGrid with classes', () => {
		component = new ClayGrid({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayGrid with id', () => {
		component = new ClayGrid({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
