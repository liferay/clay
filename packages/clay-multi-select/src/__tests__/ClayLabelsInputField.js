import ClayMultiSelect from '../ClayMultiSelect';

let component;
let spritemap = 'icons.svg';
let helpText = 'You can use a comma to enter tags';

describe('ClayMultiSelect', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayMultiSelect({
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with classes', () => {
		component = new ClayMultiSelect({
			elementClasses: 'my-custom-class',
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayMultiSelect with id', () => {
		component = new ClayMultiSelect({
			helpText,
			id: 'myId',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
