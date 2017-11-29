import ClayDatasetDisplay from '../ClayDatasetDisplay';

let component;

describe('ClayDatasetDisplay', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayDatasetDisplay();

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with classes', () => {
		component = new ClayDatasetDisplay({
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with id', () => {
		component = new ClayDatasetDisplay({
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});
});
