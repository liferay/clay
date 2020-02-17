/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayEmptyState from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayEmptyState', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayEmptyState />);

		expect(container).toMatchSnapshot();
	});
});
