'use strict';

import MetalQuartzButton from '../src/MetalQuartzButton';

let sample;

describe('MetalQuartzButton', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the content markup', function() {
		sample = new MetalQuartzButton(
			{
				content: 'foo'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzButton.html'].trim());
	});
});
