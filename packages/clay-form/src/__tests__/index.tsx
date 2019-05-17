/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayForm from '..';

describe('ClayForm', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
