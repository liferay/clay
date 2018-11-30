import ClayDataProvider from '../ClayDataProvider';

let component;

describe('ClayDataProvider', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayDataProvider();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDataProvider with classes', () => {
		component = new ClayDataProvider({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDataProvider with id', () => {
		component = new ClayDataProvider({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
