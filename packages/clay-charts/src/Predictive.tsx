/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Data} from 'billboard.js';
import * as React from 'react';

import BillboardWrapper from './BillboardWrapper';

interface IProps {
	data: Data;
	predictionDate?: any;
	[key: string]: any;
}

/**
 * Predictive Chart component.
 */
const PredictiveChart = React.forwardRef<HTMLDivElement, IProps>(
	({data, predictionDate, ...otherProps}, ref) => {
		let columns = data.columns;

		if (columns) {
			columns = columns.map((dataSeries: any) => {
				if (dataSeries[0] !== 'x') {
					dataSeries = dataSeries.map((element: any) => {
						return typeof element === 'number'
							? {
									high: element,
									low: element,
									mid: element,
							  }
							: element;
					});
				}

				return dataSeries;
			});
		}

		const regions = [];

		if (predictionDate) {
			regions.push({
				axis: 'x',
				start: predictionDate,
			});
		}

		return (
			<BillboardWrapper
				data={
					{
						...data,
						columns,
					} as any
				}
				ref={ref}
				regions={regions as any}
				{...otherProps}
			/>
		);
	}
);

export default PredictiveChart;
