/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTabs from '..';
import React from 'react';
import {cleanup, render} from '@testing-library/react';

describe('ClayTabs', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayTabs />);

		expect(container).toMatchSnapshot();
	});
});
