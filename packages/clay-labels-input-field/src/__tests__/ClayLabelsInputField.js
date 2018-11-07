import ClayLabelsInputField from '../ClayLabelsInputField';

let component;
let spritemap = 'icons.svg';
let helpText = 'You can use a comma to enter tags';

describe('ClayLabelsInputField', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayLabelsInputField({
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayLabelsInputField with classes', () => {
		component = new ClayLabelsInputField({
			elementClasses: 'my-custom-class',
			helpText,
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayLabelsInputField with id', () => {
		component = new ClayLabelsInputField({
			helpText,
			id: 'myId',
			spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
