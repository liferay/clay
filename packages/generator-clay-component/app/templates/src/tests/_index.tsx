/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {cleanup, render} from 'react-testing-library';
import <%= componentName %> from '..';

describe('<%= componentName %>', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<<%= componentName %> />
		);

		expect(container).toMatchSnapshot();
	});
});
