/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayBadge from '../ClayBadge';

describe('ClayBadge', function() {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge label="4" type="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('applies custom className', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge className="foo bar" label="4" type="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});