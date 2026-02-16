/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayChart from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

const MAP_DATA = require('../../stories/static/map.js');

const COLUMNS = [
	['data1', 100, 20, 30],
	['data2', 20, 70, 100],
];

function ChartWithRef() {
	const chartRef = React.useRef<any>(null);

	return (
		<ClayChart
			data={{
				columns: COLUMNS,
				type: 'bar',
			}}
			ref={chartRef}
		/>
	);
}

/**
 * These tests need to be revisited at a later date.
 *
 * Currently these tests only render the root element of the charts and not the svg
 * content, which is not ideal. react-test-renderer doesn't support tests that rely
 * on refs very well and @testing-library/react keeps erroring for nodes not found,
 * which seems to stem from jsdom.
 */
describe('ClayCharts', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayChart
				data={{
					columns: COLUMNS,
					type: 'bar',
				}}
				elementProps={{className: 'foo-bar-baz'}}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders when using a ref', () => {
		const testRenderer = TestRenderer.create(<ChartWithRef />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders a map', () => {
		const testRenderer = TestRenderer.create(
			<ClayChart
				data={{
					...MAP_DATA,
					type: 'geo-map',
				}}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
