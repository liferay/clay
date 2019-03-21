/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayColorPicker from '../ClayColorPicker';

describe('ClayColorPicker', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayColorPicker />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
