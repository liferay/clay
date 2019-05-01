/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayPanel from '..';

describe('ClayPanel', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayPanel />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
