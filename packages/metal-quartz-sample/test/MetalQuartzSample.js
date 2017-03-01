'use strict';

import MetalQuartzSample from '../src/MetalQuartzSample';

let sample;

describe('MetalQuartzSample', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the content markup', function() {
		sample = new MetalQuartzSample(
			{
				content: 'foo'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzSample.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		sample = new MetalQuartzSample(
			{
				content: 'foo',
				elementClasses: 'css-class'
			}
		);

		assert.strictEqual(sample.element.outerHTML, __html__['test/fixture/testElementClassesMetalQuartzSample.html'].trim());
	});
});
