/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayLabel from '../ClayLabel';

describe('ClayLabel', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel>{'Default Label'}</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
