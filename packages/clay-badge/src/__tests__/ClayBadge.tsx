/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayBadge from '../ClayBadge';

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
