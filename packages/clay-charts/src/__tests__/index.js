import React from 'react';
import TestRenderer from 'react-test-renderer';
import Chart, {BarChart} from '../index';

const COLUMNS = [['data1', 100, 20, 30], ['data2', 20, 70, 100]];

describe('Chart', function() {
	it('should render named chart without js exception', () => {
		const testRenderer = TestRenderer.create(
			<BarChart
				className="bar-chart"
				data={{
					columns: COLUMNS,
				}}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should render with type without js exception', async () => {
		const testRenderer = TestRenderer.create(
			<Chart
				className="bar-chart"
				data={{
					columns: [['data1', 30], ['data2', 70]],
					type: 'donut',
				}}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
