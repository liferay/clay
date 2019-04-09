/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayModal from '../ClayModal';

describe('ClayModal', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
