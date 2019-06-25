/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from 'react-testing-library';
import React from 'react';
import ClayManagementToolbar from '..';

describe('ClayManagementToolbar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayManagementToolbar />
		);

		expect(container).toMatchSnapshot();
	});
});
