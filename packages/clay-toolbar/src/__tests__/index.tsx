/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayToolbar from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayToolbar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayToolbar />);

		expect(container).toMatchSnapshot();
	});
});
