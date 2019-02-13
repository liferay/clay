/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import <%= componentName %> from '../<%= componentName %>';

describe('<%= componentName %>', function() {
	it('should render', () => {
		const testRenderer = TestRenderer.create(
			<<%= componentName %> />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
