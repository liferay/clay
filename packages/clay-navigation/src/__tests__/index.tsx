/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from 'react-testing-library';
import React from 'react';
import ClayNavigation from '..';

describe('ClayNavigation', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayNavigation />
		);

		expect(container).toMatchSnapshot();
	});
});
