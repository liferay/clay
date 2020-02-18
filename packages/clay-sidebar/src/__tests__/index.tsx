/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClaySidebar from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClaySidebar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClaySidebar />);

		expect(container).toMatchSnapshot();
	});
});
