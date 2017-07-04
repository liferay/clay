'use strict';

import ClayButton from '../ClayButton';

let button;

describe('ClayButton', function() {
	afterEach(() => {
		if (button) {
			button.dispose();
		}
	});

	it('should generate the default markup', function() {
		button = new ClayButton();

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

	it('should render a success button', function() {
		button = new ClayButton({
			style: 'success',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label', function() {
		button = new ClayButton({
			label: 'Label',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label', function() {
		button = new ClayButton({
			name: 'myButton',
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a link with ariaLabel attribute', function() {
		button = new ClayButton({
			ariaLabel: 'My Description',
			href: 'http://liferay.com',
			label: 'Visit Liferay.com',
		});

		expect(button).toMatchSnapshot();
	});
});
