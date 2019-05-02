/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayList from '..';

describe('ClayList', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayList />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
