'use strict';

import MetalQuartzButton from '../src/MetalQuartzButton';

const FIXTURE_DIR = 'test/fixture/';

const DEFAULT_BUTTON = __html__[FIXTURE_DIR + 'testDefaultMetalQuartzButton.html'].trim();
const DEFAULT_BUTTON_WITH_LABEL = __html__[FIXTURE_DIR + 'testMetalQuartzButtonWithLabel.html'].trim();
const DEFAULT_BUTTON_WITH_NAME = __html__[FIXTURE_DIR + 'testMetalQuartzButtonWithName.html'].trim();
const DISABLED_BUTTON = __html__[FIXTURE_DIR + 'testDisabledMetalQuartzButton.html'].trim();
const SUBMIT_BUTTON = __html__[FIXTURE_DIR + 'testSubmitMetalQuartzButton.html'].trim();
const SUCCESS_BUTTON = __html__[FIXTURE_DIR + 'testSuccessMetalQuartzButton.html'].trim();

let sample;

describe('MetalQuartzButton', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the default markup', function() {
		sample = new MetalQuartzButton();

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON);
	});

	it('should render a submit button', function() {
		sample = new MetalQuartzButton({
				type: 'submit'
			});

		assert.strictEqual(sample.element.outerHTML, SUBMIT_BUTTON);
	});
	
	it('should render a disabled button', function() {
		sample = new MetalQuartzButton({
				disabled: true
			});

		assert.strictEqual(sample.element.outerHTML, DISABLED_BUTTON);
	});
	
	it('should render a success button', function() {
		sample = new MetalQuartzButton({
				style: 'success'
			});

		assert.strictEqual(sample.element.outerHTML, SUCCESS_BUTTON);
	});
	
	it('should render a button with label', function() {
		sample = new MetalQuartzButton({
				label: 'Label'
			});

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON_WITH_LABEL);
	});
	
	it('should render a button with label', function() {
		sample = new MetalQuartzButton({
				name: 'myButton'
			});

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON_WITH_NAME);
	});
});
