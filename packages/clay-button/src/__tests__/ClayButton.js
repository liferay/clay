import ClayButton from '../ClayButton';
import {domData} from 'metal-dom';

let button;

describe('ClayButton', function() {
	afterEach(() => {
		if (button) {
			button.dispose();
		}
	});

	it('should render the default markup', function() {
		button = new ClayButton();

		expect(button).toMatchSnapshot();
	});

	it('should render a button with classes', function() {
		button = new ClayButton({
			elementClasses: 'my-custom-class',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with id', function() {
		button = new ClayButton({
			id: 'myId',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a submit button', function() {
		button = new ClayButton({
			type: 'submit',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a disabled button', function() {
		button = new ClayButton({
			disabled: true,
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a secondary button', function() {
		button = new ClayButton({
			style: 'secondary',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label', function() {
		button = new ClayButton({
			label: 'Label',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with name', function() {
		button = new ClayButton({
			name: 'myButton',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label and ariaLabel', function() {
		button = new ClayButton({
			ariaLabel: 'My Description',
			label: 'Visit Liferay.com',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a small button', function() {
		button = new ClayButton({
			size: 'sm',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a block button', function() {
		button = new ClayButton({
			block: true,
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with icon', function() {
		button = new ClayButton({
			icon: {
				spritemap: 'icons.svg',
				symbol: 'plus',
			},
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with icon and monospaced true', function() {
		button = new ClayButton({
			icon: {
				spritemap: 'icons.svg',
				symbol: 'plus',
			},
			monospaced: true,
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with icon and label', function() {
		button = new ClayButton({
			icon: {
				spritemap: 'icons.svg',
				symbol: 'plus',
			},
			label: 'Label',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label and icon', function() {
		button = new ClayButton({
			icon: {
				alignment: 'right',
				spritemap: 'icons.svg',
				symbol: 'plus',
			},
			label: 'Label',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with customData attributes', function() {
		button = new ClayButton({
			data: {
				myAttribute: 'myValue',
			},
		});

		expect(domData.get(button.element, 'myAttribute')).toEqual('myValue');
	});
});
