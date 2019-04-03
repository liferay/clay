/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayProgressBar from '../ClayProgressBar';

describe('ClayProgressBar', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayProgressBar />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
