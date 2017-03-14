'use strict';

import MetalQuartzCollapse from '../src/MetalQuartzCollapse';

let collapse;

describe('MetalQuartzCollapse', function() {
	afterEach(() => {
		if (collapse) {
			collapse.dispose();
		}
	});

	it('should generate the content markup', function() {
		collapse = new MetalQuartzCollapse(
			{
				content: 'foo'
			}
		);

		assert.strictEqual(collapse.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzCollapse.html'].trim());
	});
});
