import ClayDatePicker from '../ClayDatePicker';

let component;
let spritemap = 'icons.svg';
let years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

describe('ClayDatePicker', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayDatePicker({
			spritemap,
			years,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatePicker with classes', () => {
		component = new ClayDatePicker({
			elementClasses: 'my-custom-class',
			spritemap,
			years,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatePicker with id', () => {
		component = new ClayDatePicker({
			id: 'myId',
			spritemap,
			years,
		});

		expect(component).toMatchSnapshot();
	});
});
