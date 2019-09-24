/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import BillboardWrapper from './BillboardWrapper';
import React from 'react';
import {Data} from 'billboard.js';

interface IProps {
	data: Data;
	forwardRef: React.MutableRefObject<any>;
	predictionDate?: any;
	[key: string]: any;
}

/**
 * Predictive Chart component.
 */
const PredictiveChart: React.FunctionComponent<IProps> = ({
	data,
	forwardRef,
	predictionDate,
	...otherProps
}) => {
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
			ref={forwardRef}
			regions={regions as any}
			{...otherProps}
		/>
	);
};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	({data, ...otherProps}, ref) => (
		<PredictiveChart
			data={data}
			forwardRef={ref as React.MutableRefObject<any>}
			{...otherProps}
		/>
	)
);
