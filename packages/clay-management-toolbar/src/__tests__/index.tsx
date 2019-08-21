/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayManagementToolbar from '..';
import React from 'react';
import {cleanup, render} from '@testing-library/react';

describe('ClayManagementToolbar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayManagementToolbar />);

		expect(container).toMatchSnapshot();
	});
});
