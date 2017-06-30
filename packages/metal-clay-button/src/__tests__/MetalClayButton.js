'use strict';

import MetalClayButton from '../MetalClayButton';

let button;

describe('MetalClayButton', function() {
	afterEach(() => {
		if (button) {
			button.dispose();
		}
	});

	it('should generate the default markup', function() {
		button = new MetalClayButton();

		expect(button).toMatchSnapshot();
	});

	it('should render a submit button', function() {
		button = new MetalClayButton({
			type: 'submit'
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a disabled button', function() {
		button = new MetalClayButton({
			disabled: true
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a success button', function() {
		button = new MetalClayButton({
			style: 'success'
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label', function() {
		button = new MetalClayButton({
			label: 'Label'
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a button with label', function() {
		button = new MetalClayButton({
			name: 'myButton'
		});

		expect(button).toMatchSnapshot();
	});

	it('should render a link with ariaLabel attribute', function() {
		button = new MetalClayButton({
			ariaLabel: 'My Description',
			href: 'http://liferay.com',
			label: 'Visit Liferay.com'
		});

		expect(button).toMatchSnapshot();
	});
});
