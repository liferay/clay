/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayDropDown from '..';

describe('ClayDropDown', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayDropDown />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
