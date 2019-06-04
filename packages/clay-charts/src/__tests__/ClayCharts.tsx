/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCharts from '..';
import React from 'react';
import {cleanup, render} from 'react-testing-library';

const COLUMNS = [['data1', 100, 20, 30], ['data2', 20, 70, 100]];

describe('ClayCharts', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayCharts
				data={{
					columns: COLUMNS,
				}}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
