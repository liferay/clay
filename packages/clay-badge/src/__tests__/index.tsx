import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayBadge from '..';

describe('ClayBadge', function() {
	it('should render', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge type="primary" label="4" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should render with custom className', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge className="foo bar" type="primary" label="4" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
